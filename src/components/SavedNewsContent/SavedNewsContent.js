import React from 'react';

import NewsCardList from '../NewsCardList/NewsCardList';
import { savedNewsList } from '../../consts/newsList';

import './SavedNewsContent.css';

function SavedNewsContent() {
  return (
    <div className="saved-news-content">
      <div className="side-padding">
        <NewsCardList newsList={savedNewsList} saved />
      </div>
    </div>
  );
}

export default SavedNewsContent;
