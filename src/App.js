import React, { useEffect, useState } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import RecipeSearch from './components/RecipeSearch/RecipeSearch';
import './App.css';
import RecipeResults from './components/RecipeResults/RecipeResults';
import RecipeInfo from './components/RecipeInfo/RecipeInfo';

function App() {
  const searchParams = {
    key: process.env.REACT_APP_RECIPE_KEY,
    api: 'https://www.themealdb.com/api/json/v1/',
    endpoint: '/search.php?s='
  };
  // const [searchPlaceholder, setSearchPlaceHolder] = useState();
  const [recipe, setRecipe] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    getRecipes(searchString);
  }, []);

  function getRecipes(searchString) {
    //create a variable for url using searchParams object
    const url = `${searchParams.api}${searchParams.key}${searchParams.endpoint}${searchString}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setRecipes(response.meals);
      });
    // setSearchString('');
  }
  function handleChange(evt) {
    //sets the searchString to the user input value
    setSearchString(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    getRecipes(searchString);
  }

  function setSelectedRecipe(meal) {
    setRecipe(meal);
  }

  return (
    <div className="App">
      <header>
        <h1>Recipe Finder</h1>
        <RecipeSearch handleChange={handleChange} handleSubmit={handleSubmit} />
        <nav>
          <Link to="/">
            <p>Results</p>
          </Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <RecipeResults
                recipes={recipes}
                setSelectedRecipe={setSelectedRecipe}
              />
            )}
          />
          <Route
            exact
            path="/:recipe"
            render={routerProps => {
              console.log(routerProps);
              return (
                <RecipeInfo
                  {...routerProps}
                  recipes={recipes}
                  recipe={recipe}
                />
              );
            }}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
