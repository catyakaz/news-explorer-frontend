import React from 'react';

import Navigation from '../Navigation/Navigation';

import './SavedHeader.css';

function SavedHeader({ handleClick }) {
  return (
    <div className="saved-header">
      <Navigation isDark isLoggedIn handleClick={handleClick} />
      <div className="saved-header__info side-padding">
        <h4 className="saved-header__breadcrumb">Сохраненные статьи</h4>
        <h1 className="saved-header__title">
          Грета, у вас 5 сохраненных статей
        </h1>
        <p className="saved-header__keywords">
          По ключевым словам: <span className="saved-header__keyword_bold">Природа</span>, <span className="saved-header__keyword_bold">Тайга</span> и <span className="saved-header__keyword_bold">2-м другим</span>
        </p>
      </div>
    </div>
  );
}

export default SavedHeader;
