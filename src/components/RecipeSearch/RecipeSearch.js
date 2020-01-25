import React from 'react';
import './RecipeSearch.css';

function RecipeSearch(props) {
  return (
    <div>
      <form className="search-form" onSubmit={props.handleSubmit}>
        <input
          type="text"
          id="searchString"
          placeholder="search for recipe by name"
          onChange={props.handleChange}
          value={props.searchString}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default RecipeSearch;
