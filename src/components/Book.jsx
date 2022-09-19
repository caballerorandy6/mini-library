const Book = ({ book, setBook, deleteBook }) => {
  const { title, author, date, description, id } = book;

  const handleDelete = () => {
    const response = confirm("Are you sure you want to delete this book?");

    if (response) {
      deleteBook(id);
    }
  };

  return (
    <div className="m-3 bg-white px-5 py-10 rounded-md shadow-md">
      <p className="font-bold mb-3 text-gray-800 uppercase">
        Title: <span className="normal-case font-normal">{title}</span>
      </p>
      <p className="font-bold mb-3 text-gray-800 uppercase">
        Author: <span className="normal-case font-normal">{author}</span>
      </p>
      <p className="font-bold mb-3 text-gray-800 uppercase">
        Date of Edition: <span className="normal-case font-normal">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-800 uppercase">
        Description:{" "}
        <span className="normal-case font-normal">{description}</span>
      </p>
      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-10 bg-blue-600 text-white rounded-lg font-bold uppercase"
          onClick={() => setBook(book)}
        >
          Edit
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 text-white rounded-lg font-bold uppercase"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Book;
