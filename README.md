# Recipe Book by Lucca

Una aplicación hecha con **React + Vite** para consultar recetas y organizar preparaciones de forma simple, visual y práctica.

## Demo

[Ver proyecto online](https://lucashel-design.github.io/recipe-app/)

## Descripción

Este proyecto nació como práctica de React básico e intermedio, pero con una idea útil y real: tener una pequeña app donde se pueda:

- buscar recetas por nombre
- ver el detalle de cada receta
- cambiar entre **Libro de recetas** y **Libro de preparaciones**
- marcar recetas según prioridad de preparación:
  - **Urgente**
  - **Preparar**
  - **No preparar**
- guardar ese estado incluso después de cerrar la app

La información de preparación se guarda en `localStorage`, así que permanece hasta que alguien la cambie manualmente.

---

## Funcionalidades

### Libro de recetas
- barra de búsqueda por nombre
- listado de recetas
- detalle de receta seleccionada

### Libro de preparaciones
- barra de búsqueda
- listado de todas las recetas
- clasificación por estado:
  - **Urgente**
  - **Preparar**
  - **No preparar**
- orden automático por prioridad:
  1. Urgente
  2. Preparar
  3. No preparar

### Persistencia
- los estados de preparación se guardan en `localStorage`
- la información sigue disponible aunque se cierre o recargue la página

---

## Tecnologías usadas

- **React**
- **Vite**
- **JavaScript**
- **CSS**
- **GitHub Pages** para el despliegue

---

## Conceptos de React practicados en este proyecto

Este proyecto me sirvió para practicar y consolidar:

- componentes
- JSX
- props
- `useState`
- `useEffect`
- eventos (`onClick`, `onChange`, `onSubmit`)
- renderizado condicional
- renderizado de listas con `map`
- `key`
- formularios controlados
- `localStorage`
- organización por componentes

---

## Estructura del proyecto

```bash
src/
├── components/
│   ├── PreparationList.jsx
│   ├── RecipeCard.jsx
│   ├── RecipeDetail.jsx
│   ├── RecipeList.jsx
│   └── SearchBar.jsx
├── data/
│   └── recipes.js
├── App.jsx
├── main.jsx
└── styles.css