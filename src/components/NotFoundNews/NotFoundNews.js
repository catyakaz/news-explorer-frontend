import React from 'react';

import sadFace from '../../images/sad_face.svg';
import './NotFoundNews.css';

function NotFoundNews() {
  return (
    <div className="not-found-news">
      <div className="side-padding">
        <div className="not-found-news__container">
          <img
            className="not-found-news__sad-face"
            src={sadFace}
            alt="sad-face"
          />
          <h3 className="not-found-news__title">Ничего не найдено</h3>
          <p className="not-found-news__text">
            К сожалению по вашему запросу ничего не найдено.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFoundNews;
