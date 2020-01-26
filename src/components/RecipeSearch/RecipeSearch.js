import React from 'react';
import './RecipeSearch.css';

const RecipeSearch = ({ handleChange, searchString, handleSubmit }) => {
  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="searchString"
          placeholder="search for recipe by name"
          onChange={handleChange}
          value={searchString}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default RecipeSearch;
