import React from 'react';

import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

import './MainHeader.css';

function MainHeader({ handleClick }) {
  return (
    <header className="main-header">
      <Navigation className="main-header__navigation" isLoggedIn handleClick={handleClick} />
      <div className="main-header__content">
        <h1 className="main-header__title">Что творится в мире?</h1>
        <h3 className="main-header__subtitle">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.
        </h3>
        <SearchForm />
      </div>
    </header>
  );
}

export default MainHeader;
