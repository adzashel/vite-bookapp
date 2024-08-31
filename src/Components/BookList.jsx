import List from "./List";


const BookList = ({ onHandleShow , currentBooks }) => {
  return (
    // Books Section
    <>
      <div className="book-container">
        <List onHandleShow={onHandleShow} currentBooks={ currentBooks } />
  </div>
    </>
    
  )
}

export default BookList
