import React, { useEffect, useState } from 'react';
import RecipeSearch from './components/RecipeSearch/RecipeSearch';
import './App.css';
import RecipeResults from './components/RecipeResults/RecipeResults';

function App() {
  const searchParams = {
    key: process.env.REACT_APP_RECIPE_KEY,
    api: 'https://www.themealdb.com/api/json/v1/',
    endpoint: '/search.php?s='
  };
  const [recipes, setRecipes] = useState([]);
  const [searchString, setSearchString] = useState('chicken');

  useEffect(() => {
    getRecipes(searchString);
  }, []);

  function getRecipes(searchString) {
    //create a variable for url using searchParams object
    const url = `${searchParams.api}1${searchParams.endpoint}${searchString}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setRecipes(response.data);
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
      </header>
      <main>
        <RecipeResults recipes={recipes} />
      </main>
    </div>
  );
}

export default App;
