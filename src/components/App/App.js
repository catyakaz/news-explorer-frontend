import React, { useState, useCallback, useEffect } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';

import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';
import LoginPopup from '../LoginPopup/LoginPopup';
import InfoPopup from '../InfoPopup/InfoPopup';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import MainApi from '../../utils/MainApi';
import ProtectedRoute from '../../hocs/ProtectedRoute';

import './App.css';

const mainApi = new MainApi();

function parseArticleResponse(article) {
  return {
    keyword: article.keyword,
    title: article.title,
    description: article.text,
    publishedAt: article.date,
    source: {
      name: article.source,
    },
    url: article.link,
    urlToImage: article.image,
    id: article._id
  };
}

function App() {
  const [registrationPopupIsOpen, setRegistrationPopupIsOpen] = useState(false);
  const [loginPopupIsOpen, setLoginPopupIsOpen] = useState(false);
  const [infoPopupIsOpen, setInfoPopupIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const [registrationErrorText, setRegistrationErrorText] = useState('');
  const [loginErrorText, setLoginErrorText] = useState('');

  const [currentUser, setCurrentUser] = useState();

  const getUserInfo = useCallback(async () => {
    const userInfo = await mainApi.getInfo();
    setCurrentUser(userInfo)
  }, [setCurrentUser]);


  const [articles, setArticles] = useState([]);

  const history = useHistory();

  const getArticles = useCallback(async () => {
    const articleList = await mainApi.getArticles();
    setArticles(
      articleList.articles.map((article) => parseArticleResponse(article)),
    );
  }, []);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      (async function() {
        try {
          await Promise.all([
            getUserInfo(),
            getArticles()
          ])
          setLoaded(true);
        } catch (e) {
          console.log(e.message);
        }
      })()
    } else {
      setLoaded(true);
    }
  }, [getArticles, getUserInfo])

  function handleSignOut() {
    localStorage.removeItem('token');
    history.push('/');
    setCurrentUser(null);
    setArticles([]);
  }

  function closeRegistrationPopup() {
    setRegistrationPopupIsOpen(false);
  }

  function closeLoginPopup() {
    setLoginPopupIsOpen(false);
  }

  function closeInfoPopup() {
    setInfoPopupIsOpen(false);
  }

  function openRegistrationPopup() {
    setRegistrationPopupIsOpen(true);
  }

  function openLoginPopup() {
    setLoginPopupIsOpen(true);
  }

  function openInfoPopup() {
    setInfoPopupIsOpen(true);
  }

  async function handleRegistrationPopupButtonClick(values) {
    try {
      await mainApi.signup(values.email, values.password, values.name);
      closeRegistrationPopup();
      openInfoPopup();
    } catch (error) {
      const errorMessage =
        error.message === '400'
          ? 'Данные заполнены неверно'
          : 'Ошибка регистрации';
      console.log(errorMessage);
      setRegistrationErrorText(errorMessage);
    }
  }

  const clearRegistrationErrorText = useCallback(() => {
    setRegistrationErrorText('');
  }, []);

  function handleRegistrationPopupLinkClick() {
    closeRegistrationPopup();
    openLoginPopup();
  }
  

  async function handleLoginPopupButtonClick(values) {
    try {
      const response = await mainApi.signin(values.email, values.password);
      localStorage.setItem('token', response.jwt);
      await getUserInfo();
      await getArticles();
      closeLoginPopup();
    } catch (error) {
      let errorMessage = '';
      switch (error.message) {
        case '400':
          errorMessage = 'Данные заполнены неверно';
          break;
        case '404':
          errorMessage = 'Пользователя не существует';
          break;
        default:
          errorMessage = 'Ошибка авторизации';
      }
      setLoginErrorText(errorMessage);
    }
  }

  const clearLoginErrorText = () => {
    setLoginErrorText('');
  };

  function handleLoginPopupLinkClick() {
    closeLoginPopup();
    openRegistrationPopup();
  }

  function handleInfoPopupLinkClick() {
    closeInfoPopup();
    openLoginPopup();
  }

  async function handleArticleDelete(id) {
    try {
      await mainApi.deleteArticle(id);
      const newArticleList = articles.filter(article => article.id !== id);
      setArticles(newArticleList);
    } catch(e) {
      console.log(e.message);
    }
  }

  async function handleArticleSave(data) {
    try {
      const newArticle = await mainApi.saveArticle(data);
      setArticles([...articles, parseArticleResponse(newArticle)]);
    } catch(e) {
      console.log(e.message);
    }
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        {loaded
          ? (
          <>
            <Switch>
              <ProtectedRoute openLoginPopup={openLoginPopup} component={SavedNews} path="/saved-news" handleArticleDelete={handleArticleDelete} articles={articles} handleSignOut={handleSignOut} handleSignUp={openLoginPopup} />
              <Route path="/">
                <Main openLoginPopup={openLoginPopup} handleArticleDelete={handleArticleDelete} savedArticles={articles} handleArticleSave={handleArticleSave} handleSignUp={openLoginPopup} handleSignOut={handleSignOut} />
              </Route>
            </Switch>
            <Footer />
          </>
          ) : ''
        }
      </CurrentUserContext.Provider>
      <RegistrationPopup
        isOpen={registrationPopupIsOpen}
        handleClose={closeRegistrationPopup}
        handleButtonClick={handleRegistrationPopupButtonClick}
        handleLinkClick={handleRegistrationPopupLinkClick}
        errorText={registrationErrorText}
        clearErrorText={clearRegistrationErrorText}
      />
      <LoginPopup
        isOpen={loginPopupIsOpen}
        handleClose={closeLoginPopup}
        handleButtonClick={handleLoginPopupButtonClick}
        handleLinkClick={handleLoginPopupLinkClick}
        errorText={loginErrorText}
        clearErrorText={clearLoginErrorText}
      />
      <InfoPopup
        isOpen={infoPopupIsOpen}
        handleClose={closeInfoPopup}
        handleLinkClick={handleInfoPopupLinkClick}
      />
    </div>
  );
}

export default App;
