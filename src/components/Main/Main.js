import React, { useState } from 'react';

import MainHeader from '../MainHeader/MainHeader';
import About from '../About/About';
import MainContent from '../MainContent/MainContent';
import Preloader from '../Preloader/Preloader';
import NotFoundNews from '../NotFoundNews/NotFoundNews';

import './Main.css';

function Main({ handleClick }) {
  const [isLoading] = useState(false);
  const [notFound] = useState(false);

  return (
    <>
      <MainHeader handleClick={handleClick} />
      {isLoading ? (
        <Preloader />
      ) : notFound ? (
        <NotFoundNews />
      ) : (
        <MainContent />
      )}
      <About />
    </>
  );
}

export default Main;
