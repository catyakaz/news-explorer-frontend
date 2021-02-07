import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

import './NewsCardList.css';

function NewsCardList({ newsList, className = '', saved = false }) {
  return (
    <div className={`news-card-list ${className}`}>
      {newsList.map((newsCard) => (
        <NewsCard key={newsCard.id} newsCard={newsCard} saved={saved} />
      ))}
    </div>
  );
}

export default NewsCardList;
