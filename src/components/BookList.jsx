import { useEffect } from "react";
import Book from "./Book";

const BookList = ({ books, setBook, deleteBook }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
      {books && books.length ? (
        <>
          <h3 className="text-2xl font-bold text-center text-blue-600 mb-5">
            Manage your <span className="text-gray-800">books</span>
          </h3>

          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              setBook={setBook}
              deleteBook={deleteBook}
            />
          ))}
        </>
      ) : (
        <h3 className="text-2xl font-bold text-center text-blue-600 mb-5">
          No <span className="text-gray-800">books</span> at this time
        </h3>
      )}
    </div>
  );
};

export default BookList;
