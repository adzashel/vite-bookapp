import BookList from "../BookList";
import { useState, useEffect } from "react";
import BookDetail from "../BookDetail"
import Paginations from "../Paginations";
import Navbar from "../Navbar";
import Total from "../Total";
const apiUrl = "https://www.dbooks.org/api/recent";
const searchUrl = "https://www.dbooks.org/api/search/";

const Container = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(20);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [details, setDetails] = useState(null);
  
    const handleShow = (id) => {
      // fetch data from server
      fetch("https://www.dbooks.org/api/book/" + id)
        .then((response) => response.json())
        .then((book) => {
          setDetails(book);
        });
      setShow(true);
    };
  
    // fetch api
    const getApi = () => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((result) => {
          setBooks(result.books);
        });
    };
  
    // useEffect
    useEffect(() => {
      getApi();
    }, []);
  
    // when button search are clicked
    const searchBook = async (search) => {
      try {
        const getData = await fetch(searchUrl + search);
        const result = await getData.json();
        setBooks(result.books);
        setSearch("");
      } catch (e) {
        alert(e.message);
      }
    };
  
    // Pagination Logics
    const lastPostIndex = currentPage * booksPerPage;
    const firstPostIndex = lastPostIndex - booksPerPage;
    const currentBooks = books.slice(firstPostIndex, lastPostIndex);
  return (
    <>
    <Navbar search={search} setSearch={setSearch} onSearchBook={searchBook} />
    <Total data={books} />
    <BookList
              currentBooks={currentBooks}
              onHandleShow={handleShow}
              data={books}
            />
    <Paginations
      totalData={books.length}
      booksPerPage={booksPerPage}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
    />
    <BookDetail onHandleClose={handleClose} show={show} details={details} />
    </>
    
  )
}

export default Container;
