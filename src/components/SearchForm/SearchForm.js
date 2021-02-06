import React from 'react';

import Button from '../Button/Button';

import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form">
      <input
        type="text"
        name="search"
        className="search-form__input"
        placeholder="Введите тему новости"
      />
      <Button className="search-form__button" text="Искать" />
    </form>
  );
}

export default SearchForm;
