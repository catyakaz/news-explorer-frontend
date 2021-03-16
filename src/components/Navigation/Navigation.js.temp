import React, { useState, useMemo } from 'react';

import { NavLink, Link } from 'react-router-dom';

import './Navigation.css';

function Navigation({ isDark, isLoggedIn }) {
  const [mobileNavShow, setMobileNavShow] = useState(false);

  function handleMobileToggleClick() {
    setMobileNavShow((prevState) => !prevState);
  }

  let navigationThemeClass = useMemo(() => {
    if (isDark) {
      if (mobileNavShow) {
        return 'navigation_font-dark navigation_background-light';
      } else {
        return 'navigation_font-dark';
      }
    } else {
      if (mobileNavShow) {
        return 'navigation_background-dark';
      }
      return '';
    }
    // if (isDark && mobileNavShow) {
    //   return 'navigation_font-dark navigation_background-dark';
    // } else if (isDark && !mobileNavShow) {
    //   return 'na'
    // }
  }, [mobileNavShow, isDark]);

  return (
    <>
      <nav
        className={`navigation-wrapper__navigation navigation side-padding ${navigationThemeClass}`}
      >
        <Link to="/" className="navigation__logo">
          NewsExplorer
        </Link>
        <div
          className={`navigation__menu ${
            mobileNavShow ? 'navigation__menu_mobile-show' : ''
          } ${!isDark ? 'navigation__menu_dark' : ''}`}
        >
          <ul className="navigation__links">
            <li className="navigation__link-item">
              <NavLink
                exact
                to="/"
                className="navigation__link"
                activeClassName="navigation__link_active"
              >
                Главная
              </NavLink>
            </li>
            <li className="navigation__link-item">
              <NavLink
                to="/saved-news"
                className="navigation__link"
                activeClassName="navigation__link_active"
              >
                Сохраненные статьи
              </NavLink>
            </li>
          </ul>
          <button
            className={`navigation__auth-button ${
              isDark ? 'navigation__auth-button_dark' : ''
            } ${isLoggedIn ? 'navigation__auth-button_logged-in' : ''}`}
          >
            Грета
          </button>
        </div>
        <button
          className={`navigation__mobile-toggle ${
            mobileNavShow ? 'navigation__mobile-toggle_close' : ''
          } ${isDark ? 'navigation__mobile-toggle_dark' : ''}`}
          onClick={handleMobileToggleClick}
        ></button>
      </nav>
      <div
        className={`navigation-wrapper__line`}
      ></div>
    </>
  );
}

export default Navigation;
