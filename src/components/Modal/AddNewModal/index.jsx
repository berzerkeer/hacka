import React, { useRef, useState } from 'react';
import { useUserStore } from 'store/user';
import { useAppstore } from 'store/globalStore';

import UserChip from 'components/UserChip';
import NewChallengeForm from 'components/Forms/NewChallenge';

import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import Modal from '../Modal';
import './addnewmodal.scss';

export default function AddNewModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useUserStore((state) => state);
  const { tags } = useAppstore((state) => state);
  const modal = useRef(null);

  function toggleScrollLock() {
    document.querySelector('html').classList.toggle('scroll-lock');
  }

  const openModal = () => {
    setIsOpen(true);
    toggleScrollLock();
  };

  const closeModal = () => {
    setIsOpen(false);
    toggleScrollLock();
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  const onClickOutside = (event) => {
    if (modal && modal.current.contains(event.target)) return;
    closeModal();
  };

  const createPost = async (data) => {
    let responseObj = null;
    try {
      const res = await fetch('http://localhost:8000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      responseObj = await res.json();
    } catch (error) {
      console.error('Error creating post', error);
    }
    return responseObj;
  };

  const updateUser = async (postId) => {
    let responseObj = null;
    try {
      const res = await fetch(`http://localhost:8000/user/${currentUser.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          posts: [...currentUser.posts, postId],
          upvotes: [...currentUser.upvotes, postId]
        })
      });
      responseObj = await res.json();
    } catch (error) {
      console.error('Error updating user', error);
    }
    return responseObj;
  };

  const updateTags = async (postData) => {
    let responseObj = null;
    const postTags = postData.tags;

    const tagsObjPayload = postTags.reduce((obj, key) => {
      obj[key] = tags[key] ? [...tags[key], postData.id] : [postData.id];
      return obj;
    }, {});

    try {
      const res = await fetch(`http://localhost:8000/tags`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...tags, ...tagsObjPayload })
      });
      responseObj = await res.json();
    } catch (error) {
      console.error('Error updating user', error);
    }
    return responseObj;
  };

  const handleSubmit = async (event, postData) => {
    event.stopPropagation();
    try {
      const data = await createPost(postData);
      const user = await updateUser(postData.id);
      const tagsObj = await updateTags(postData);
      useAppstore.getState().setPosts(data);
      useUserStore.getState().setCurrentUser(user);
      useAppstore.getState().setTags(tagsObj);
    } catch (error) {
      console.error('Something went wrong', error);
    } finally {
      closeModal();
    }
  };

  const handleClose = (event) => {
    event.stopPropagation();
    closeModal();
  };

  const renderFooterComponent = () => (
    <div className="flex flex-ai-c footer__buttons">
      <button className="footer__buttons__submit" onClick={handleSubmit}>
        Submit
      </button>
      <button className="footer__buttons__cancel" onClick={handleClose}>
        Cancel
      </button>
    </div>
  );

  return (
    <>
      <div className="add__new flex flex-ai-c" onClick={openModal}>
        <div className="flex flex-ai-c left">
          <span className="add__new__avatar">
            <UserChip isMini />
          </span>
          <h2 className="add__new__text">Click to add new post</h2>
        </div>
        <span className="add__new__icon">
          <AddIcon />
        </span>
      </div>
      {isOpen ? (
        <Modal
          modalRef={modal}
          closeModal={closeModal}
          onKeyDown={onKeyDown}
          onClickOutside={onClickOutside}
          component={
            <NewChallengeForm
              onSubmit={handleSubmit}
              onClose={handleClose}
              data={currentUser}
            />
          }
        />
      ) : null}
    </>
  );
}
