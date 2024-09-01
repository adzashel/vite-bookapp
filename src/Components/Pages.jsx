const Pages = ( { pages , active  ,setCurrentPage }) => {
  return (
    <>
   { pages.map((page , i ) => {
    return(
      <button
      key={ i }
      onClick={() => setCurrentPage(page)}
      className={page == active ? "active" : ""}
    >
      {page}
    </button>
    )
   })}
      </>
   
  )
}

export default Pages

