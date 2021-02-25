import React, { useContext } from 'react';

import Navigation from '../Navigation/Navigation';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import pluralize from '../../utils/pluralize';

import './SavedHeader.css';

function SavedHeader({ handleSignOut, handleSignUp, articles }) {
  const currentUser = useContext(CurrentUserContext);

  const articlesCount = articles.length;

  const countKeywords = () => {
    if (!articlesCount) {
      return '';
    }
    const keywords = articles.map((article) => article.keyword);
    const keywordsCountList = keywords.reduce((finalList, keyword) => {
      const index = finalList.findIndex(
        (item) => item.name.toLowerCase() === keyword.toLowerCase(),
      );
      if (index === -1) {
        finalList.push({
          name: keyword.charAt(0).toUpperCase() + keyword.slice(1),
          count: 1,
        });
      } else {
        finalList[index].count += 1;
      }
      return finalList;
    }, []);

    const sortedKeywordsCountList = keywordsCountList.sort((a, b) => {
      return b.count - a.count;
    });

    let result;
    // console.log(sortedKeywordsCountList);
    
    if (sortedKeywordsCountList.length === 1) {
      result = (
        <span className="saved-header__keyword_bold">{sortedKeywordsCountList[0].name}</span>
      )
    } else if (sortedKeywordsCountList.length === 2) {
      result = (
        <>
            <span className="saved-header__keyword_bold">{
              sortedKeywordsCountList[0].name
            }</span>{' и '}
            <span className="saved-header__keyword_bold">{
              sortedKeywordsCountList[1].name
            }</span>
        </>
      )
    } else if (sortedKeywordsCountList.length === 3) {
      result = (
        <>
          {' '}
          {sortedKeywordsCountList.slice(0, -1).map((keyword, index) => (
            <span className="saved-header__keyword_bold">{`${keyword.name}${index === 0 ? ', ' : ''}`}</span>
          ))}{' '}
          и{' '}
          <span className="saved-header__keyword_bold">
            {sortedKeywordsCountList.slice(-1)[0].name}
          </span>
        </>
      );
    } else {
      result = (
        <>
          {' '}
          {sortedKeywordsCountList.slice(0, 2).map((keyword, index) => (
            <>
              <span className="saved-header__keyword_bold">{`${keyword.name}${index === 0 ? ',' : ''}`}</span>{' '}
            </>
          ))}{' '}
          и{' '}
          <span className="saved-header__keyword_bold">
            {pluralize(sortedKeywordsCountList.length - 2, { two: '{}-м другим', five: '{}-и другим'})}
          </span>
        </>
      );
    }

    return [ result, sortedKeywordsCountList.length];
  };

  const [result, keywordsCount] = countKeywords();

  return (
    <div className="saved-header">
      <Navigation
        isDark
        isLoggedIn
        handleSignOut={handleSignOut}
        handleSignUp={handleSignUp}
      />
      <div className="saved-header__info side-padding">
        <h4 className="saved-header__breadcrumb">Сохраненные статьи</h4>
        <h1 className="saved-header__title">
          {currentUser ? currentUser.name : ''}, у вас{' '}
          {pluralize(articlesCount, {
            zero: '{} сохраненных статей',
            one: '{} сохраненная статья',
            two: '{} сохраненные статьи',
            five: '{} сохраненных статей'
          })}
        </h1>
        <p className="saved-header__keywords">
          {
            articlesCount ?  (
              pluralize(keywordsCount, {
                one: 'По ключевому слову: ',
                two: 'По ключевым словам: ',
                five: 'По ключевым словам: '
              }) 
            ) : ''
          }
          {
            keywordsCount ? result : ''
          }
        </p>
      </div>
    </div>
  );
}

export default SavedHeader;
