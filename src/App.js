import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
  };

  return (
    <div className="App">
      <h1>Hello React</h1>

      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {/* <button
        onClick={() => {
          console.log(process.env.REACT_APP_APP_ID);
          console.log(process.env.REACT_APP_APP_ID);
        }}
      >
        Click
      </button> */}
    </div>
  );
}

export default App;
