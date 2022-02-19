/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';

import './modal.scss';

function Modal({
  onClickOutside,
  onKeyDown,
  modalRef,
  footerComponent,
  buttonRef,
  closeModal,
  component
}) {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="modal__cover"
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        <div className="modal__area flex flex-ai-c" ref={modalRef}>
          <div className="modal__body">{component}</div>
          {footerComponent && (
            <div className="modal__footer">{footerComponent}</div>
          )}
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
}

export default Modal;
