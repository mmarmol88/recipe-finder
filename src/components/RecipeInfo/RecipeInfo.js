import React from 'react';
import './RecipeInfo.css';

const RecipeInfo = ({ currentRecipe }) => {
  if (!currentRecipe) {
    //Conditionally renders the component as to avoid console errors
    return null;
  }
  const ingredients = [];
  function getRecipeIngredients() {
    let i = 1;
    //as long as the recipe property is defined return the value for both strIngredient and strMeasure
    while (currentRecipe['strIngredient' + i]) {
      const name = currentRecipe['strIngredient' + i];
      const measurement = currentRecipe['strMeasure' + i];
      //push the value of name and measurement to ingredients array in order to map through for ingredient and measurement values
      ingredients.push(name + ' : ' + measurement);
      i++;
    }
    return ingredients;
  }
  getRecipeIngredients();

  // Isolate video Id from strYoutube property in order to use in src of iframe youtube
  const youTubeVideo = currentRecipe.strYoutube.split('=');

  return (
    <div className="display-recipe" key={currentRecipe.idMeal}>
      <section className="recipe-image">
        <img src={currentRecipe.strMealThumb} alt={currentRecipe.strMeal} />
      </section>
      <section className="ingredients">
        <h2>{currentRecipe.strMeal}</h2>
        <h4>Ingredients</h4>
        <ul className="ingredient-list">
          {/* in order to map through the ingredients I must return a key, in this case using index to avoid console errors */}
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="instructions">
        <h4>Instructions</h4>
        <p>{currentRecipe.strInstructions}</p>
      </section>

      <div className="responsive-video">
        <iframe
          //source including the video id in order to avoid rejection via , Code similar to react-youtube. Provided by Jen to try to solve console warnings I was getting via react youTube player
          src={`https://www.youtube.com/embed/${youTubeVideo[1]}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope"
          allowFullScreen
          title={currentRecipe.strMeal}
        />
      </div>
    </div>
  );
};

export default RecipeInfo;
