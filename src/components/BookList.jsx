import Book from "./Book";

const BookList = ({ books }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
      <h3 className="text-2xl font-bold text-center text-blue-600 mb-5">
        Manage your <span className="text-gray-800">books</span>
      </h3>

      {books.map((book) => (
        <Book book={book} />
      ))}
    </div>
  );
};

export default BookList;
