import React from 'react';

const RecipeInfo = ({ recipe }) => {
  console.log(recipe);
  if (!recipe.length) {
    return <p>Recipe Info not available</p>;
  }

  return (
    <div>
      <p>recipe Information</p>
      {recipe.map(item => (
        <div key={item.idMeal}>
          <img src={item.strMeal} alt={item.strMeal} />
        </div>
      ))}
    </div>
  );
};

export default RecipeInfo;
