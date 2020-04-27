import React from 'react';
import {APP_KEY, APP_ID} from './keys/edamamKeys';
import './App.css';

function App() {
  const exmapleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <h1>Hello Recat</h1>
    </div>
  );
}

export default App;
