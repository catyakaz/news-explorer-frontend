import React from 'react';

import SavedHeader from '../SavedHeader/SavedHeader';
import SavedNewsContent from '../SavedNewsContent/SavedNewsContent';

import './SavedNews.css';

function SavedNews({ handleClick }) {
  return (
    <>
      <SavedHeader handleClick={handleClick} />
      <SavedNewsContent />
    </>
  );
}

export default SavedNews;
