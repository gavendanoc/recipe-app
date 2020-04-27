import React, {useEffect, useState} from 'react';
import {APP_KEY, APP_ID} from './keys/edamamKeys';
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
  // runs every time the page re-renders
  useEffect(()=> {
    console.log('Effect has been run')
  }, []);

  const getREcipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="Search-form">
        <input className="search-bar" type="text"></input>
        <button 
          className="search-button" 
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
