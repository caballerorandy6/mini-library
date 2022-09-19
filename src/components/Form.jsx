import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ books, setBooks, book, setBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(book).length > 0) {
      setTitle(book.title);
      setAuthor(book.author);
      setDate(book.date);
      setDescription(book.description);
    } else {
    }
  }, [book]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([title, author, date, description].includes("")) {
      setError(true);
    } else {
      setError(false);

      //New Book
      const bookObj = {
        title,
        author,
        date,
        description,
      };

      if (book.id) {
        //Editing Book
        bookObj.id = book.id;

        const updatedBooks = books.map((bookState) =>
          bookState.id === book.id ? bookObj : bookState
        );
        setBooks(updatedBooks);
        setBook({}); //Limpiando el state
      } else {
        //Creating new book
        bookObj.id = generateId();
        setBooks([...books, bookObj]);
      }

      //Reset Form
      setTitle("");
      setAuthor("");
      setDate("");
      setDescription("");
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h3 className="text-2xl font-bold text-center text-blue-600 mb-5">
        Add and manage <span className="text-gray-800">books</span>
      </h3>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md py-10 px-5 mb-5"
      >
        {error && (
          <Error>
            <p>All fields are required</p>
          </Error>
        )}
        <div>
          <label htmlFor="title" className="p-1 font-bold uppercase">
            Book Title
          </label>
          <input
            type="text"
            placeholder="Book Title"
            id="title"
            className="w-full mt-1 mb-4 p-1 border-2 rounded md hover:bg-gray-50  focus:outline-blue-400
            active:border-gray-200 focus:border-3  placeholder:italic"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author" className="p-1 font-bold uppercase">
            Author
          </label>
          <input
            type="text"
            placeholder="Author"
            id="author"
            className="w-full mt-1 mb-4 p-1 border-2 rounded md hover:bg-gray-50  focus:outline-blue-400
            active:border-gray-200 focus:border-3  placeholder:italic"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date" className="p-1 font-bold uppercase">
            Date of Edition
          </label>
          <input
            type="date"
            placeholder="Date of Edition"
            id="date"
            className="w-full mt-1 mb-4 p-1 border-2 rounded md hover:bg-gray-50  focus:outline-blue-400
            active:border-gray-200 focus:border-3  placeholder:italic"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description" className="p-1 font-bold uppercase">
            Description
          </label>
          <textarea
            type="text"
            placeholder="Description"
            id="description"
            className="w-full mt-1 mb-4 p-1 border-2 rounded md hover:bg-gray-50  focus:outline-blue-400
            active:border-gray-200 focus:border-3  placeholder:italic"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={book.id ? "Edit Book" : "Add Book"}
          className="bg-blue-600 text-white p-4 w-full uppercase font-bold cursor-pointer hover:bg-blue-700 transition-color"
        />
      </form>
    </div>
  );
};

export default Form;
