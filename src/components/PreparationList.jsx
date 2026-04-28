function PreparationList({
  recipes,
  preparationStatus,
  onStatusChange,
  onOpenRecipe,
}) {
  const priorityOrder = {
    urgente: 0,
    preparar: 1,
    no_preparar: 2,
  };

  const sortedRecipes = [...recipes].sort((a, b) => {
    const statusA = preparationStatus[a.id] || "no_preparar";
    const statusB = preparationStatus[b.id] || "no_preparar";

    const priorityA = priorityOrder[statusA];
    const priorityB = priorityOrder[statusB];

    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }

    return a.title.localeCompare(b.title);
  });

  const recipesToPrepare = sortedRecipes.filter((recipe) => {
    const status = preparationStatus[recipe.id] || "no_preparar";
    return status === "urgente" || status === "preparar";
  });

  const recipesNotToPrepare = sortedRecipes.filter((recipe) => {
    const status = preparationStatus[recipe.id] || "no_preparar";
    return status === "no_preparar";
  });

  function renderRecipeItem(recipe) {
    const currentStatus = preparationStatus[recipe.id] || "no_preparar";

    return (
      <article key={recipe.id} className="preparation-item">
        <div className="preparation-info">
          <button
            type="button"
            className="recipe-title-button"
            onClick={() => onOpenRecipe(recipe)}
          >
            {recipe.title}
          </button>
        </div>

        <div className="preparation-actions">
          <button
            type="button"
            className={currentStatus === "urgente" ? "active urgent" : ""}
            onClick={() => onStatusChange(recipe.id, "urgente")}
          >
            Urgente
          </button>

          <button
            type="button"
            className={currentStatus === "preparar" ? "active prepare" : ""}
            onClick={() => onStatusChange(recipe.id, "preparar")}
          >
            Preparar
          </button>

          <button
            type="button"
            className={
              currentStatus === "no_preparar" ? "active no-prepare" : ""
            }
            onClick={() => onStatusChange(recipe.id, "no_preparar")}
          >
            No preparar
          </button>
        </div>
      </article>
    );
  }

  return (
    <section className="preparation-list">
      <div className="preparation-group">
        <h2 className="preparation-group-title">
          Recetas que sí hay que preparar
        </h2>

        {recipesToPrepare.length > 0 ? (
          recipesToPrepare.map(renderRecipeItem)
        ) : (
          <p>No hay recetas marcadas para preparar.</p>
        )}
      </div>

      <div className="preparation-group">
        <h2 className="preparation-group-title">
          Recetas que no hace falta preparar
        </h2>

        {recipesNotToPrepare.length > 0 ? (
          recipesNotToPrepare.map(renderRecipeItem)
        ) : (
          <p>No hay recetas marcadas como “No preparar”.</p>
        )}
      </div>
    </section>
  );
}

export default PreparationList;