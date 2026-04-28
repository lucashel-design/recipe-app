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

  return (
    <section className="preparation-list">
      {sortedRecipes.map((recipe) => {
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
      })}
    </section>
  );
}

export default PreparationList;