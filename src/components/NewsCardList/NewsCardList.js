import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

import './NewsCardList.css';

function NewsCardList({
  newsList,
  className = '',
  saved = false,
  handleSave,
  handleDelete,
  keyword,
  openLoginPopup
}) {
  return (
    <div className={`news-card-list ${className}`}>
      {newsList.map((newsCard, index) => (
        <NewsCard
          key={index}
          newsCard={newsCard}
          saved={saved}
          handleSave={handleSave}
          handleDelete={handleDelete}
          keyword={keyword}
          openLoginPopup={openLoginPopup}
        />
      ))}
    </div>
  );
}

export default NewsCardList;
