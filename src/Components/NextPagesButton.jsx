
const NextPagesButton = ({ currentPage , pages , setCurrentPage}) => {
  return (
    <button
   disabled={currentPage === pages.length}
   onClick={() => setCurrentPage(currentPage + 1)}
 >
   Next
 </button>
  )
}

export default NextPagesButton
