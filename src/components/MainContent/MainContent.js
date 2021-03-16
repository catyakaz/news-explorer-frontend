import React from 'react';

import NewsCardList from '../NewsCardList/NewsCardList';

import './MainContent.css';

function MainContent({ openLoginPopup, handleArticleDelete, handleMoreButtonClick, handleArticleSave, articles, showButton, keyword }) {

  return (
    <main className="main-content">
      <div className="side-padding">
        <h2 className="main-content__title">Результаты поиска</h2>
        <NewsCardList
          className="main-content__news-card-list"
          newsList={articles}
          handleSave={handleArticleSave}
          handleDelete={handleArticleDelete}
          keyword={keyword}
          openLoginPopup={openLoginPopup}
        />
        {showButton ? (
          <button
            onClick={handleMoreButtonClick}
            className="main-content__button"
          >
            Показать еще
          </button>
        ) : (
          ''
        )}
      </div>
    </main>
  );
}

export default MainContent;
