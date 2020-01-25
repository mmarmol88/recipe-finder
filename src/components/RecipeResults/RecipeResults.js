import React from 'react';
import './RecipeResults.css';
import { Link } from 'react-router-dom';

const RecipeResults = ({ recipes, setSelectedRecipe }) => {
  if (!recipes.length) {
    return <p>No recipes found</p>;
  }
  return (
    <div className="recipe-results">
      {recipes.map(item => (
        <div key={item.idMeal} className="recipe">
          <img src={item.strMealThumb} />
          <Link to={`/${item.strMeal}`}>
            <p onClick={() => setSelectedRecipe(item)}>{item.strMeal}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeResults;
