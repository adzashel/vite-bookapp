import List from "./List";
import Loader from "./Loader";

const BookList = ({ onHandleShow , currentBooks , loading}) => {
  return (
    // Books Section
    <>
      <div className="book-container">
       { loading ? (
          <Loader />
       ) : currentBooks ? (  
         <List onHandleShow={ onHandleShow } currentBooks={currentBooks } />
       ) : null }
  </div>
    </>

  )
}

export default BookList
