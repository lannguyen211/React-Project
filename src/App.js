import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_KEY = "50621e08ca7543bbbd2ba11163de82b5";
  //const baseUri = "https://spoonacular.com/recipeImages/";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chocolate");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.results);
    console.log(data.results);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1 className="top-header">Food Recipes</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.title}
            image={`https://spoonacular.com/recipeImages/${recipe.image}`}
            howtocook={recipe.sourceUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
