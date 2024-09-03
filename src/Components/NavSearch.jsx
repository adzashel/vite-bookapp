import ThemeToggle from "./ThemeToggle";

const NavSearch = ({ search , onSearch , onSearchBook}) => {
  return (
    <div className="nav-search">
      <input
        type="text"
        placeholder="Search for books..."
        className="inpt-search"
        onChange={(e) => onSearch(e.target.value)}
        value={search}
      />
      <button
        type="search"
        className="search-button"
        onClick={() => onSearchBook(search)}
      >
        Search
      </button>
      <ThemeToggle />
    </div>
  );
};

export default NavSearch;
