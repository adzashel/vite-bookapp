function PrevPagesButton({ currentPage , setCurrentPage}) {
  return (
    <button
    disabled={currentPage === 1}
    onClick={ () => setCurrentPage(currentPage - 1) }
  >
    Prev
  </button>
  )
}



export default PrevPagesButton;

