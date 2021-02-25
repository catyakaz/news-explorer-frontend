import React, { useState, useMemo, useEffect } from 'react';

import MainHeader from '../MainHeader/MainHeader';
import About from '../About/About';
import MainContent from '../MainContent/MainContent';
import Preloader from '../Preloader/Preloader';
import NotFoundNews from '../NotFoundNews/NotFoundNews';
import Error from '../NetworkError/Error';
import NewsApi from '../../utils/NewsApi';

import './Main.css';

function Main({ handleArticleDelete, savedArticles, handleSignUp, handleSignOut, handleArticleSave, openLoginPopup }) {
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmptyString, setIsEmptyString] = useState(false);

  const [articles, setArticles] = useState([]);
  const [articlesCount, setArticlesCount] = useState(3);
  const [keyword, setKeyword] = useState('');

  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const localArticles = localStorage.getItem('articles');
    if (localArticles) {
      const localArticlesObj = JSON.parse(localArticles);
      setArticles(localArticlesObj.articles);
      setKeyword(localArticlesObj.keyword)
    }
  }, [savedArticles]);

  useEffect(() => {
    localStorage.setItem('articles', JSON.stringify({
      keyword,
      articles
    }));
  }, [keyword, articles]);

  async function handleSearch(searchQuery) {
    if (!searchQuery) {
      setIsEmptyString(true);
      return;
    }
    setIsLoading(true);
    setIsEmptyString(false);
    setNotFound(false);
    setShowButton(true);
    let response;
    try {
      response = await new NewsApi().search(searchQuery);
      setArticles(response.articles);
      setKeyword(searchQuery);
      setArticlesCount(3);
      if (!response.articles.length) {
        setNotFound(true);
      }
      if (response.articles.length <= 3) {
        setShowButton(false);
      }
    } catch (e) {
      setIsError(true);
    }
    setIsLoading(false);
  }

  function increaseArticlesCount() {
    setArticlesCount((prevArticleCount) => prevArticleCount + 3);
    if (articlesCount + 3 >= articles.length) {
      setShowButton(false);
    }
  }

  const visibleArticles = useMemo(() => {
    const articleList = articles.map(article => {
      const savedArticleIndex = Object.values(savedArticles).findIndex(savedArticle => savedArticle.url === article.url)
      let saved = false;
      let id;
      if (savedArticleIndex > -1) {
        saved = true;
        id = savedArticles[savedArticleIndex].id;
      }
      return {
        ...article,
        saved,
        id
      }
    })
    return articleList.slice(0, articlesCount);
  }, [articles, articlesCount, savedArticles]);

  return (
    <>
      <MainHeader handleSignUp={handleSignUp} handleSignOut={handleSignOut} handleSearch={handleSearch} />
      {isLoading ? (
        <Preloader />
      ) : notFound ? (
        <NotFoundNews />
      ) : isError ? (
        <Error />
      ) : isEmptyString ? (
        <Error emptyString={isEmptyString} />
      ) : articles.length ? (
        <MainContent
          openLoginPopup={openLoginPopup}
          handleArticleDelete={handleArticleDelete}
          handleArticleSave={handleArticleSave}
          handleMoreButtonClick={increaseArticlesCount}
          articles={visibleArticles}
          showButton={showButton}
          keyword={keyword}
        />
      ) : (
        ''
      )}
      <About />
    </>
  );
}

export default Main;
