import React from 'react';
import './RecipeResults.css';
import { Link } from 'react-router-dom';

const RecipeResults = ({ recipes }) => {
  // console.log(recipes);
  if (!recipes.length) {
    return (
      <h2 className="error">
        Hello food lover! There are no recipes related to your search. Try
        something else.
      </h2>
    );
  }
  return (
    <>
      <div>
        <h3 className="welcome">
          Welcome to recipe Finder! Have a recipe in mind you would like to try?
          Click one below or use search.
        </h3>
      </div>
      <div className="recipe-results">
        {recipes.map(item => (
          <div key={item.idMeal} className="recipe">
            <img src={item.strMealThumb} alt={item.strMeal} />
            <Link to={`/recipes/${item.idMeal}`}>
              <h3>{item.strMeal}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeResults;
