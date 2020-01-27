import React, { useEffect, useState } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import RecipeSearch from './components/RecipeSearch/RecipeSearch';
import './App.css';
import RecipeResults from './components/RecipeResults/RecipeResults';
import RecipeInfo from './components/RecipeInfo/RecipeInfo';

function App() {
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
        console.log(response);
        setRecipes(response.meals);
        setSearchString('');
      });
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
        <nav>
          <Link to="/recipes">
            <p>Results</p>
          </Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route
            exact
            path="/recipes"
            render={() => <RecipeResults recipes={recipes} />}
          />
          <Route
            exact
            path="/recipes/:recipe"
            render={routerProps => {
              console.log(routerProps);
              return (
                <RecipeInfo
                  recipes={recipes}
                  recipe={routerProps.match.params.recipe}
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
