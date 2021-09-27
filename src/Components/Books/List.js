import React, {Component} from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class List extends Component {
  render() {
    const {updateBookShelf, label, books} = this.props
    return (
      <>
        <div className="flex justify-items-start border-b">
          <h1 className="text-2xl text-black pb-2">{label}</h1>
        </div>
        <div className="bg-white mb-4">
          <div className="max-w-2xl mx-auto py-2 px-4 lg:py-4 lg:max-w-7xl">

            <div className="mt-6 grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-4">
              {books.length > 0 && books.map((book) => (
                <Book key={book.id} book={book} updateBookShelf={updateBookShelf}/>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

List.propTypes = {
  label: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired
}

export default List
