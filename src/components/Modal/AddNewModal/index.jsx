import React, { useRef, useState } from 'react';

import UserChip from 'components/UserChip';
import NewChallengeForm from 'components/Forms/NewChallenge';

import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import Modal from '../Modal';
import './addnewmodal.scss';

export default function AddNewModal() {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('submit');
    closeModal();
  };

  const handleClose = (event) => {
    event.stopPropagation();
    console.log('close');
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
            <UserChip />
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
            <NewChallengeForm onSubmit={handleSubmit} onClose={handleClose} />
          }
          data={{ code: 'test' }}
        />
      ) : null}
    </>
  );
}
