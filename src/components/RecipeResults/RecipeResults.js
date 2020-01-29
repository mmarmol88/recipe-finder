import React from 'react';
import './RecipeResults.css';
import { Link } from 'react-router-dom';

const RecipeResults = ({ recipes }) => {
  // console.log(recipes);
  if (!recipes.length) {
    return <p>No recipes found</p>;
  }
  return (
    <>
      <p>
        Welcome to recipe Finder. Have a recipe in mind you would like to try?
        Click one below or use search.
      </p>
      <div className="recipe-results">
        {recipes.map(item => (
          <div key={item.idMeal} className="recipe">
            <img src={item.strMealThumb} alt={item.strMeal} />
            <Link to={`/recipes/${item.idMeal}`}>
              <p>{item.strMeal}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeResults;
