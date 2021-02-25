import React from 'react';

import NewsCardList from '../NewsCardList/NewsCardList';

import './SavedNewsContent.css';

function SavedNewsContent({ articles, handleArticleDelete }) {

  return (
    <div className="saved-news-content">
      <div className="side-padding">
        <NewsCardList newsList={articles} saved handleDelete={handleArticleDelete} />
      </div>
    </div>
  );
}

export default SavedNewsContent;
