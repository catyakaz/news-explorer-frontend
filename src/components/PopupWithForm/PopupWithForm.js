import React, { useEffect } from 'react';

import './PopupWithForm.css';

function PopupWithForm({ children, handleClose, isOpen }) {
  useEffect(() => {
    function handleOutsideClick(event) {
      if (event.target.matches('.popup')) {
        handleClose();
      }
    }
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleClose]);

  useEffect(() => {
    function handleEsc(event) {
      const escKeyCode = 27;
      if (event.keyCode === escKeyCode) {
        handleClose();
      }
    }

    window.addEventListener('keyup', handleEsc);

    return () => {
      window.removeEventListener('keyup', handleEsc);
    };
  }, [handleClose]);

  return (
    <div className={`popup ${isOpen ? 'popup_visible' : ''}`}>
      <div className="popup__inner">
        <button className="popup__close-button" onClick={handleClose}></button>
        {children}
      </div>
    </div>
  );
}

export default PopupWithForm;
