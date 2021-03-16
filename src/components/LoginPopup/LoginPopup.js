import React, { useEffect } from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Button from '../Button/Button';
import useForm from '../../hooks/useForm';

function LoginPopup({
  handleButtonClick,
  handleLinkClick,
  errorText,
  clearErrorText,
  ...props
}) {
  const [values, errors, formIsValid, handleChangeInput, resetForm] = useForm();

  useEffect(() => {
    if (errorText && !props.isOpen) {
      clearErrorText();
    }
    resetForm();
  }, [props.isOpen, clearErrorText, resetForm, errorText]);

  function handleSubmit(event) {
    event.preventDefault();
    handleButtonClick(values);
    resetForm();
  }

  function handleChange(event) {
    clearErrorText();
    handleChangeInput(event);
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
            value={values.email ? values.email : ''}
            onChange={handleChange}
            required
          />
        </div>
        <p
          className={`popup__error ${
            errors.email ? 'popup__error_show' : ''
          } popup__error_input`}
        >
          {errors.email}
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
            value={values.password ? values.password : ''}
            onChange={handleChange}
            required
          />
        </div>
        <p
          className={`popup__error ${
            errors.password ? 'popup__error_show' : ''
          } popup__error_input`}
        >
          {errors.password}
        </p>
        <p
          className={`popup__error ${
            errorText ? 'popup__error_show' : ''
          } popup__error_general`}
        >
          {errorText}
        </p>
        <div className="popup__footer">
          <Button
            handleClick={handleSubmit}
            text="Войти"
            className="popup__button"
            disabled={!formIsValid}
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
