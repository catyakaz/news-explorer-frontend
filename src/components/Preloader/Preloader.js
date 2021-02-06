import React from 'react';

import './Preloader.css';

function Preloader() {
  return (
    <div className="preloader">
      <div className="side-padding">
        <div className="preloader__container">
          <div className="preloader__circle"></div>
          <p className="preloader__text">Идет поиск новостей...</p>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
