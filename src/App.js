import React, {useEffect, useState} from 'react';
import {APP_KEY, APP_ID} from './keys/edamamKeys';
import Recipe from './components/Recipe';
import './App.css';


/** 

Runs every time a page re-renders
useEffect(()=> {
  console.log('Effect has been run')
});

Runs only one time, check second argument
useEffect(() => {
  console.log('Effect has run');
}, []);


Runs when state 'counter' changes
useEffect(()=>{
  console.log('Effect has run');
}, [counter]);
*/

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');


  // runs every time the page re-renders
  useEffect(()=> {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <form className="Search-form">
        <input 
          className="search-bar" 
          type="text" 
          value={search}
          onChange={updateSearch}
        ></input>
        <button 
          className="search-button" 
          type="submit"
        >
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
