import { useEffect } from "react";
import { useState } from "react";

const BookDetailPages = ({ match }) => {
  const [book, setBook] = useState(null);

  const handleDetail = (id) => {
    // fetch data from server
    fetch("https://www.dbooks.org/api/book/" + id)
      .then((response) => response.json())
      .then((book) => {
        setBook(book);
      });
  };

  useEffect(() => {
    handleDetail(bookId)
  })
  
 

  const {
    params: { bookId },
  } = match;

  return(
    <div>Detail Book Pages = {bookId}</div>
  ) 
};

export default BookDetailPages;
