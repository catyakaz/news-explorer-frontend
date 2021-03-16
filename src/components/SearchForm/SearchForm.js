import React, { useState } from 'react';

import Button from '../Button/Button';


import './SearchForm.css';

function SearchForm({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    handleSearch(searchQuery);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        className="search-form__input"
        placeholder="Введите тему новости"
        value={searchQuery}
        onChange={handleChange}
      />
      <Button className="search-form__button" text="Искать" />
    </form>
  );
}

export default SearchForm;
