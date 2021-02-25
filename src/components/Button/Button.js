import React from 'react';

import './Button.css';

function Button({
  text = 'Кнопка',
  className = '',
  disabled,
  handleClick = () => {},
}) {
  return (
    <button
      className={`button ${className} ${disabled ? 'button_disabled' : ''}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
