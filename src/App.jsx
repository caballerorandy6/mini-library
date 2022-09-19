import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});

  useEffect(() => {
    const getLS = () => {
      const booksLS = JSON.parse(localStorage.getItem("books")) ?? [];
      setBooks(booksLS);
    };
    getLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="md:flex">
        <Form books={books} setBooks={setBooks} book={book} setBook={setBook} />
        <BookList books={books} setBook={setBook} deleteBook={deleteBook} />
      </div>
    </div>
  );
}

export default App;
