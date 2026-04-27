import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, onSelect }) {
  return (
    <section id="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onSelect={onSelect}
        />
      ))}
    </section>
  );
}

export default RecipeList;