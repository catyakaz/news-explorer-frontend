import React from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Button from '../Button/Button';

function LoginPopup({ handleButtonClick, handleLinkClick, ...props }) {
  function handleSubmit(event) {
    event.preventDefault();
    handleButtonClick();
  }

  return (
    <PopupWithForm {...props}>
      <form className="popup__container" noValidate>
        <h3 className="popup__title">Вход</h3>
        <div className="popup__input-wrapper">
          <label className="popup__input-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Введите почту"
            id="email"
            className="popup__input"
          />
        </div>
        <p className="popup__error popup__error_show popup__error_input">
          Неправильный формат email
        </p>
        <div className="popup__input-wrapper">
          <label className="popup__input-label" htmlFor="password">
            Пароль
          </label>
          <input
            type="password"
            name="password"
            placeholder="Введите пароль"
            id="password"
            className="popup__input"
          />
        </div>
        <p className="popup__error popup__error_show popup__error_input">
          Неправильный формат пароля
        </p>
        <p className="popup__error popup__error_show popup__error_general">
          Такой пользователь уже есть
        </p>
        <div className="popup__footer">
          <Button
            handleClick={handleSubmit}
            text="Войти"
            className="popup__button"
          />
          <div className="popup__link-container">
            или{' '}
            <div onClick={handleLinkClick} className="popup__link">
              Зарегистрироваться
            </div>
          </div>
        </div>
      </form>
    </PopupWithForm>
  );
}

export default LoginPopup;
