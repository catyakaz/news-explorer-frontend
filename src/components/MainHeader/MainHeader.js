import React from 'react';

import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

import './MainHeader.css';

function MainHeader({ handleSignOut, handleSignUp, handleSearch }) {
  return (
    <header className="main-header">
      <Navigation className="main-header__navigation" isLoggedIn handleSignUp={handleSignUp} handleSignOut={handleSignOut} />
      <div className="main-header__content">
        <h1 className="main-header__title">Что творится в мире?</h1>
        <h3 className="main-header__subtitle">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.
        </h3>
        <SearchForm handleSearch={handleSearch} />
      </div>
    </header>
  );
}

export default MainHeader;
