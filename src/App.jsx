import { useEffect, useState } from "react";
import recipesData from "./data/recipes";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import PreparationList from "./components/PreparationList";
import "./styles.css";

function App() {
  const [viewMode, setViewMode] = useState("recipes");
  const [searchText, setSearchText] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [preparationStatus, setPreparationStatus] = useState(() => {
    const savedStatus = localStorage.getItem("recipePreparationStatus");
    return savedStatus ? JSON.parse(savedStatus) : {};
  });

  useEffect(() => {
    localStorage.setItem(
      "recipePreparationStatus",
      JSON.stringify(preparationStatus)
    );
  }, [preparationStatus]);

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

  function handleToggleView() {
    setViewMode((prevMode) =>
      prevMode === "recipes" ? "preparations" : "recipes"
    );
    setSelectedRecipe(null);
    setSearchText("");
  }

  function handleStatusChange(recipeId, newStatus) {
    setPreparationStatus((prevStatus) => ({
      ...prevStatus,
      [recipeId]: newStatus,
    }));
  }

  return (
    <main className="app">
      <h1>
        {viewMode === "recipes" ? "Libro de recetas" : "Libro de preparaciones"}
      </h1>

      <button className="view-toggle-btn" onClick={handleToggleView}>
        {viewMode === "recipes"
          ? "Ir a libro de preparaciones"
          : "Volver a libro de recetas"}
      </button>

      <SearchBar
        searchText={searchText}
        onSearchChange={handleSearchChange}
        placeholder={
          viewMode === "recipes"
            ? "Busca una receta..."
            : "Busca una preparación..."
        }
      />

      {viewMode === "recipes" ? (
        <>
          {filteredRecipes.length > 0 ? (
            <RecipeList
              recipes={filteredRecipes}
              onSelect={handleSelectRecipe}
            />
          ) : (
            <p>No se encontraron recetas con este nombre.</p>
          )}

          <RecipeDetail recipe={selectedRecipe} />
        </>
      ) : (
        <>
          {filteredRecipes.length > 0 ? (
            <PreparationList
              recipes={filteredRecipes}
              preparationStatus={preparationStatus}
              onStatusChange={handleStatusChange}
            />
          ) : (
            <p>No se encontraron preparaciones con este nombre.</p>
          )}
        </>
      )}
    </main>
  );
}

export default App;