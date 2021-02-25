import React, { useState, useContext } from 'react';

import { NavLink, Link } from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import './Navigation.css';

function Navigation({ className, isDark, isLoggedIn, handleSignUp, handleSignOut }) {
  const [isOpened, setIsOpened] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  function handleClickMobileMenu() {
    setIsOpened((prevState) => !prevState);
  }

  function handleClick() {
    if (currentUser) {
      handleSignOut();
    } else {
      handleSignUp();
    }
  }

  return (
    <nav
      className={`navigation ${className || ''} ${
        isDark ? 'navigation_dark' : ''
      } ${isOpened ? 'navigation_mobile-open' : ''}`}
    >
      <div className="navigation__inner side-padding">
        <Link to="/" className="navigation__logo">
          NewsExplorer
        </Link>
        <div
          className={`navigation__menu ${
            isOpened ? 'navigation__menu_mobile-open' : ''
          }`}
        >
          <ul className="navigation__links">
            <NavLink
              className="navigation__link"
              activeClassName="navigation__link_active"
              to="/"
              exact
            >
              <li>Главная</li>
            </NavLink>
            {
              currentUser 
                ? <NavLink
                    className="navigation__link"
                    activeClassName="navigation__link_active"
                    to="/saved-news"
                  >
                    <li>Сохраненные статьи</li>
                  </NavLink>
                : ''
            }
          </ul>
          <button
            className={`navigation__auth ${
              currentUser ? 'navigation__auth_logged-in' : ''
            }`}
            onClick={handleClick}
          >
            {currentUser ? currentUser.name : 'Авторизоваться'}
          </button>
        </div>
        <div
          onClick={handleClickMobileMenu}
          className={`navigation__mobile-menu-toggle ${
            isOpened ? 'navigation__mobile-menu-toggle_close' : ''
          }`}
        ></div>
      </div>
    </nav>
  );
}

export default Navigation;
