function SearchBar({ searchText, onSearchChange }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Busca una receta..."
        value={searchText}
        onChange={onSearchChange}
      />
    </form>
  );
}

export default SearchBar;