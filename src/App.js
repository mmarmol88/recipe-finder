import React, { useEffect, useState } from 'react';
import { withRouter, Route } from 'react-router-dom';
import RecipeSearch from './components/RecipeSearch/RecipeSearch';
import './App.css';
import RecipeResults from './components/RecipeResults/RecipeResults';
import RecipeInfo from './components/RecipeInfo/RecipeInfo';

function App(props) {
  const searchOptions = {
    key: process.env.REACT_APP_RECIPE_KEY,
    api: 'https://www.themealdb.com/api/json/v1/',
    endpoint: '/search.php?s='
  };

  const [recipes, setRecipes] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    getRecipes(searchString);
  }, []);

  function getRecipes(searchString) {
    //create a variable for url using searchParams object
    const url = `${searchOptions.api}${searchOptions.key}${searchOptions.endpoint}${searchString}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (!response.meals) {
          setRecipes([]);
        } else {
          setRecipes(response.meals);
        }
        setSearchString('');
      })
      //As per Jen this helps set the path for recipe results on search
      .then(() => props.history.push('/recipes'))
      .catch
      //add an error to display error
      ();
  }
  function handleChange(evt) {
    //sets the searchString to the user input value
    setSearchString(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    getRecipes(searchString);
  }

  return (
    <div className="App">
      <header>
        <h1>Recipe Finder</h1>
        <RecipeSearch handleChange={handleChange} handleSubmit={handleSubmit} />
      </header>
      <main>
        <Route
          exact
          path="/recipes"
          render={() => <RecipeResults recipes={recipes} />}
        />
        <Route
          exact
          path="/recipes/:recipe"
          render={routerProps => {
            //Jen suggested use the find method outside of the component to avoid console errors
            const currentRecipe = recipes.find(
              item => item.idMeal === routerProps.match.params.recipe
            );
            //pass the variable that I used the find method for
            return <RecipeInfo currentRecipe={currentRecipe} />;
          }}
        />
      </main>
    </div>
  );
}
//method that takes in app
export default withRouter(App);
