import { useState } from "react";
import recipesData from "./data/recipes";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import "./styles.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipesData.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchText.toLowerCase())
  );

  function handleSearchChange(event) {
    setSearchText(event.target.value);
    setSelectedRecipe(null);
  }

  function handleSelectRecipe(recipe) {
    setSelectedRecipe(recipe);
  }

  return (
    <main className="app">
      <h1>Libro de recetas</h1>

      <SearchBar
        searchText={searchText}
        onSearchChange={handleSearchChange}
      />

      <RecipeDetail recipe={selectedRecipe} />

      {filteredRecipes.length > 0 ? (
        <RecipeList
          recipes={filteredRecipes}
          onSelect={handleSelectRecipe}
        />
      ) : (
        <p>No se encontraron recetas con este nombre.</p>
      )}

    </main>
  );
}

export default App;