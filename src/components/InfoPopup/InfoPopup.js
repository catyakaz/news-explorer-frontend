import React from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

function InfoPopup({ handleLinkClick, ...props }) {
  return (
    <PopupWithForm {...props}>
      <h3 className="popup__title">Пользователь успешно зарегистрирован!</h3>
      <div onClick={handleLinkClick} className="popup__link">
        Войти
      </div>
    </PopupWithForm>
  );
}

export default InfoPopup;
