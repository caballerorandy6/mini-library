const Book = ({ book }) => {
  return (
    <div className="m-3 bg-white px-5 py-10 rounded-md shadow-md">
      <p className="font-bold mb-3 text-gray-800 uppercase">
        Title: <span className="normal-case font-normal">{book.title}</span>
      </p>
      <p className="font-bold mb-3 text-gray-800 uppercase">
        Author: <span className="normal-case font-normal">{book.author}</span>
      </p>
      <p className="font-bold mb-3 text-gray-800 uppercase">
        Date of Edition:{" "}
        <span className="normal-case font-normal">{book.date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-800 uppercase">
        Description:{" "}
        <span className="normal-case font-normal">{book.description}</span>
      </p>
    </div>
  );
};

export default Book;
