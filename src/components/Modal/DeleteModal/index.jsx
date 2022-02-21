/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useRef, useState } from 'react';
import { useUserStore } from 'store/user';
import { useAppstore } from 'store/globalStore';

import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import Modal from '../Modal';

import './deletemodal.scss';

export default function DeleteModal({ postId }) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useUserStore((state) => state);
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

  const deletePost = async () => {
    try {
      await fetch(`http://localhost:8000/post/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Error creating post', error);
    }
  };

  const updateUser = async () => {
    let responseObj = null;
    console.log(currentUser.posts?.filter((id) => id !== postId));
    try {
      const res = await fetch(`http://localhost:8000/user/${currentUser?.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          posts: currentUser.posts?.filter((id) => id !== postId),
          upvotes: currentUser.upvotes?.filter((id) => id !== postId)
        })
      });
      responseObj = await res.json();
    } catch (error) {
      console.error('Error updating user', error);
    }
    return responseObj;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      await deletePost();
      const user = await updateUser();
      useAppstore.getState().getPosts();
      useUserStore.getState().setCurrentUser(user);
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
    <div className="flex flex-ai-c delete__footer__buttons">
      <button className="cancel__btn" onClick={handleClose}>
        Cancel
      </button>
      <button className="delete__btn" onClick={handleSubmit}>
        Delete
      </button>
    </div>
  );

  const renderComponent = () => (
    <div className="delete__modal__body flex flex-ai-c">
      <p className="confirmation__text">
        Are you sure you want to delete this challenge ?
      </p>
    </div>
  );

  return (
    <>
      <span className="delete__icon" onClick={openModal}>
        <DeleteIcon />
      </span>
      {isOpen ? (
        <Modal
          modalRef={modal}
          closeModal={closeModal}
          onKeyDown={onKeyDown}
          onClickOutside={onClickOutside}
          component={renderComponent()}
          footerComponent={renderFooterComponent()}
        />
      ) : null}
    </>
  );
}
