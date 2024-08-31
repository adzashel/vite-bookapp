
const Navbar = ({ search , setSearch , onSearchBook}) => {
  return (
    <>
      {/* Navbar Section */}
      <div className="navbar" id="navbar">
        <div className="nav-banner">
          <h1>Book App</h1>
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <a href="#section1">Home</a>
            </li>
            <li>
              <a href="#section2">About</a>
            </li>
            <li>
              <a href="https://www.dbooks.org/api/" target="_blank">
                Api
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-search">
          <input
            type="text"
            placeholder="Search for books..."
            className="inpt-search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            type="search"
            className="search-button"
            onClick={() => onSearchBook(search)}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
