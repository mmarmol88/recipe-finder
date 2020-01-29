import React from 'react';
import './RecipeSearch.css';
// import { Link } from 'react-router-dom';

const RecipeSearch = ({ handleChange, searchString, handleSubmit }) => {
  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="searchString"
          placeholder="search for recipe by keyword"
          onChange={handleChange}
          value={searchString}
        />

        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default RecipeSearch;
