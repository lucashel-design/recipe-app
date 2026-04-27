function SearchBar({ searchText, onSearchChange, placeholder }) {
  return (
    <form>
      <input
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={onSearchChange}
      />
    </form>
  );
}

export default SearchBar;