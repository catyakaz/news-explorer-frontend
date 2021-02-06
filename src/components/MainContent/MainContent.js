import React from 'react';

import NewsCardList from '../NewsCardList/NewsCardList';

import { mainNewsList } from '../../consts/newsList';
import './MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      <div className="side-padding">
        <h2 className="main-content__title">Результаты поиска</h2>
        <NewsCardList
          className="main-content__news-card-list"
          newsList={mainNewsList}
        />
        <button className="main-content__button">Показать еще</button>
      </div>
    </main>
  );
}

export default MainContent;
