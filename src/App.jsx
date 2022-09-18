import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="md:flex">
        <Form books={books} setBooks={setBooks} />
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;
