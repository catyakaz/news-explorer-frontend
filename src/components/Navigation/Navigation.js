import React, { useState } from 'react';

import { NavLink, Link } from 'react-router-dom';

import './Navigation.css';

function Navigation({ className, isDark, isLoggedIn, handleClick }) {
  const [isOpened, setIsOpened] = useState(false);

  function handleClickMobileMenu() {
    setIsOpened((prevState) => !prevState);
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
            <NavLink
              className="navigation__link"
              activeClassName="navigation__link_active"
              to="/saved-news"
            >
              <li>Сохраненные статьи</li>
            </NavLink>
          </ul>
          <button
            className={`navigation__auth ${
              isLoggedIn && 'navigation__auth_login'
            }`}
            onClick={handleClick}
          >
            Грета
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
