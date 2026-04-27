function RecipeDetail({ recipe }) {
  if (!recipe) {
    return <p>Selecciona una receta para ver el detalle.</p>;
  }

  return (
    <section id="recipe-detail">
      <h2>{recipe.title}</h2>
      <p>{recipe.time}</p>
      <p>{recipe.description}</p>

      <h4>Ingredientes:</h4>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </section>
  );
}

export default RecipeDetail;