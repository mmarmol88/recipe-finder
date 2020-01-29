import React from 'react';
import './RecipeInfo.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

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

  // Isolate video Id from strYoutubbe property in order to use react-youtube
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

      <section className="video-player">
        <VideoPlayer youTubeVideo={youTubeVideo} />
      </section>
    </div>
  );
};

export default RecipeInfo;
