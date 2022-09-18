import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ books, setBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([title, author, date, description].includes("")) {
      setError(true);
    } else {
      setError(false);

      const bookObj = {
        title,
        author,
        date,
        description,
      };

      setBooks([...books, bookObj]);

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
          value="Add Book"
          className="bg-blue-600 text-white p-4 w-full uppercase font-bold cursor-pointer hover:bg-blue-700 transition-color"
        />
      </form>
    </div>
  );
};

export default Form;
