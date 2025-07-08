import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './ModalLayout.scss';

const ModalLayout = ({ isOpen, onClose, contentClassName, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return ReactDOM.createPortal(
    <div
      className={`modal-overlay ${isOpen ? 'modal--open' : 'modal--closed'}`}
      onClick={onClose}
    >
      <div
        className={`modal-content  ${contentClassName}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-content__close" onClick={onClose}>
          <img src="/src/assets/icons/close.svg" alt="close" />
        </button>
        <div className={`modal-content__inner ${contentClassName}`}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalLayout;
