import ThemeToggle from "./ThemeToggle";
import searchImg from "../assets/search.svg";

const NavSearch = ({ search, onSearch, onSearchBook }) => {
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
        onClick={() => onSearchBook(search)}
        className="search-icon"
      >
        <img src={searchImg} alt="Search" />
      </button>

      <ThemeToggle />
    </div>
  );
};

export default NavSearch;
