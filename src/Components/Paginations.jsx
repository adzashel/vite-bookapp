const Paginations = ({
  totalData,
  booksPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  let active = currentPage;
  for (let i = 1; i <= Math.ceil(totalData / booksPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      {pages.map((page, i) => {
        return (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className={page == active ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
      <button
        disabled={currentPage === pages.length}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Paginations;
