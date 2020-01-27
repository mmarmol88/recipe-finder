import React from 'react';
import './RecipeInfo.css';

const RecipeInfo = ({ recipes, recipe }) => {
  const currentRecipe = recipes.find(item => item.idMeal === recipe);
  console.log(currentRecipe);

  return (
    <div className="display-recipe" key={currentRecipe.idMeal}>
      <section className="recipe-image">
        <img src={currentRecipe.strMealThumb} alt={currentRecipe.strMeal} />
      </section>
      <section className="instructions">
        <h3>{currentRecipe.strMeal}</h3>
        <h4>Instructions</h4>
        <p>{currentRecipe.strInstructions}</p>
        <button>
          <a target="_blank" href={currentRecipe.strYoutube}>
            Watch Video
          </a>
        </button>
      </section>
    </div>
  );
};

export default RecipeInfo;
