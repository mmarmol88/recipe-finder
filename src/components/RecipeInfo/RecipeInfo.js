import React from 'react';
import './RecipeInfo.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const RecipeInfo = ({ currentRecipe }) => {
  if (!currentRecipe) {
    return null;
  }
  const ingredients = [];
  function getRecipeIngredients() {
    let i = 1;
    //as long as the recipe property is defined return the value for both strIngredient and strMeasure
    while (currentRecipe['strIngredient' + i]) {
      const name = currentRecipe['strIngredient' + i];
      const measurement = currentRecipe['strMeasure' + i];
      ingredients.push(name + ' : ' + measurement);
      i++;
    }
    return ingredients;
  }
  getRecipeIngredients();
  const youTubeVideo = currentRecipe.strYoutube.split('=');

  console.log(youTubeVideo);

  return (
    <div className="display-recipe" key={currentRecipe.idMeal}>
      <section className="recipe-image">
        <img src={currentRecipe.strMealThumb} alt={currentRecipe.strMeal} />
        {/* <button>
          <a target="_blank" href={currentRecipe.strYoutube}>
            Watch Video
          </a>
        </button> */}
      </section>

      <section className="instructions">
        <h1>{currentRecipe.strMeal}</h1>
        <h3>Ingredients</h3>
        <ul className="ingredient-list">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <p>{currentRecipe.strInstructions}</p>
      </section>

      <section className="video-player">
        <VideoPlayer youTubeVideo={youTubeVideo} />
      </section>
    </div>
  );
};

export default RecipeInfo;

// const recipeArr = [];

// for (let [index, [key, value]] of Object.entries(currentRecipe).entries()) {
//   if (key.substring(0, 13) === 'strIngredient' && value) {
//     //substring to keep track of  the
//     const measurement = 'strMeasure' + key.substring(13, key.length);
//     const measureValue = `${currentRecipe[measurement]}`;
//     const ingredient =
//       measureValue !== ' ' || typeof measureValue !== 'undefined'
//         ? `${value} : ${measureValue}`
//         : value;
//     //add the ingredient to recipeArr
//     recipeArr.push(ingredient);
//     // console.log(recipeArr);
//   }
// }
