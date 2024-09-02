
const List = ({ currentBooks, onHandleShow }) => {
  return (
    <>
      {currentBooks.map((book) => (
        <div className="cards" key={book.id}>
          <img src={book.image} alt=""  onClick={() => onHandleShow(book.id)}/>
          <div className="card-caption">
            <h3>{book.title}</h3>
            <br />
            <p>{book.authors}</p>
            <button
              className="detail-btn"
              onClick={() => onHandleShow(book.id)}
            > 
             Detail
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
