function RecipeCard({ recipe, onSelect }) {
  return (
    <article onClick={() => onSelect(recipe)}>
      <h3>{recipe.title}</h3>
      <p>{recipe.time}</p>
    </article>
  );
}

export default RecipeCard;