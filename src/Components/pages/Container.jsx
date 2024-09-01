import BookList from "../BookList";
import { useState, useEffect } from "react";
import BookDetail from "../BookDetail";
import Paginations from "../Paginations";
import Navbar from "../Navbar";
import Total from "../Total";
import PrevPagesButton from "../PrevPagesButton";
import Pages from "../Pages";
import NextPagesButton from "../NextPagesButton";

// Api Source
const apiUrl = "https://www.dbooks.org/api/recent";
const searchUrl = "https://www.dbooks.org/api/search/";

const Container = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [booksPerPage] = useState(20);
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState(null);

  const handleClose = () => setShow(false);
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
      setLoading(true);
      const data = await fetch(searchUrl + search);
      const result = await data.json();
      setBooks(result.books);
      setSearch("");
      setLoading(false);
    } catch (e) {
      alert(e.message);
      setLoading(false);
    }
  };

  // Pagination Logics
  const lastPostIndex = currentPage * booksPerPage;
  const firstPostIndex = lastPostIndex - booksPerPage;
  const currentBooks = books.slice(firstPostIndex, lastPostIndex);

  let pages = [];
  let active = currentPage;
  const totalData = books.length;
  for (let i = 1; i <= Math.ceil(totalData / booksPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <Navbar search={search} setSearch={setSearch} onSearchBook={searchBook} />
      <Total data={books} />
      <BookList
        currentBooks={currentBooks}
        onHandleShow={handleShow}
        data={books}
        loading={loading}
      />
      <Paginations>
        <PrevPagesButton
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Pages active={active} pages={pages} setCurrentPage={setCurrentPage} />
        <NextPagesButton
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pages={totalData}
        />
      </Paginations>
      <BookDetail onHandleClose={handleClose} show={show} details={details} />
    </>
  );
};

export default Container;
