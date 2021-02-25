import React, { useEffect, useState } from 'react';

import SavedHeader from '../SavedHeader/SavedHeader';
import SavedNewsContent from '../SavedNewsContent/SavedNewsContent';

import './SavedNews.css';

function SavedNews({ articles = [], handleSignUp, handleSignOut, handleArticleDelete }) {
  return (
    <>
      <SavedHeader
        articles={articles}
        handleSignUp={handleSignUp}
        handleSignOut={handleSignOut}
      />
      <SavedNewsContent handleArticleDelete={handleArticleDelete} articles={articles} />
    </>
  );
}

export default SavedNews;
