import NavBanner from "./NavBanner";
import NavSearch from "./NavSearch";

const Navbar = ({ search, setSearch, onSearchBook }) => {
  return (
    <>
      {/* Navbar Section */}
      <div className="navbar" id="navbar">
        <NavBanner />
        <NavSearch
          search={search}
          onSearch={setSearch}
          onSearchBook={onSearchBook}
        />
      </div>
    </>
  );
};

export default Navbar;
