import React, { useRef, useState } from 'react';
import { useAppstore } from 'store/globalStore';
import { usePoststore } from 'store/posts';

import EditChallengeForm from 'components/Forms/EditChallenge';

import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';
import Modal from '../Modal';

import './editchallengemodal.scss';

export default function EditChallengeModal({ post }) {
  const [isOpen, setIsOpen] = useState(false);
  const modal = useRef(null);
  const { tags } = useAppstore((state) => state);

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

  const updatePost = async (data) => {
    let responseObj = null;
    try {
      const res = await fetch(`http://localhost:8000/post/${post.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      responseObj = await res.json();
    } catch (error) {
      console.error('Error updating post', error);
    }
    return responseObj;
  };

  const updateTags = async (postId, postData) => {
    let responseObj = null;
    const postTags = postData.tags;

    const tagsObjPayload = postTags.reduce((obj, key) => {
      obj[key] = tags[key] ? [...new Set([...tags[key], postId])] : [postId];
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
      const data = await updatePost(postData);
      const tagsObj = await updateTags(post.id, postData);
      usePoststore.getState().setPost(data);
      useAppstore.getState().setTags(tagsObj);
      useAppstore.getState().getPosts();
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

  return (
    <>
      <span className="edit__icon" onClick={openModal}>
        <EditIcon />
      </span>
      {isOpen ? (
        <Modal
          modalRef={modal}
          closeModal={closeModal}
          onKeyDown={onKeyDown}
          onClickOutside={onClickOutside}
          component={
            <EditChallengeForm
              onSubmit={handleSubmit}
              onClose={handleClose}
              data={post}
            />
          }
        />
      ) : null}
    </>
  );
}
