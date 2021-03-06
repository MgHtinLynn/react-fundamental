import React, {Component} from "react";
import Book from "../Books/Book";
import PropTypes from "prop-types";

class SearchBookList extends Component {
  render() {
    const {label, books, searchBooks, updateBookShelf} = this.props
    return (
      <div>
        <div className="max-w-7xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-items-start border-b">
            <h1 className="text-2xl text-black pb-2">{label}</h1>
          </div>
          <div className="bg-white mb-4">
            <div className="max-w-2xl mx-auto py-2 px-4 lg:py-4 lg:max-w-7xl">
              {searchBooks.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-4">
                  {searchBooks.map((book) => {
                    const bookShelf = books.filter((bookItem) => (bookItem.id === book.id))
                    if (bookShelf.length > 0) {
                      book.shelf = bookShelf[0].shelf
                    }
                    return (
                      <Book key={book.id} book={book} updateBookShelf={updateBookShelf}/>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SearchBookList.propTypes = {
  label: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  searchBooks: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired
}

export default SearchBookList
