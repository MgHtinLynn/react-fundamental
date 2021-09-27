import React, {Component} from "react";
import BookList from "../Components/Books/BookList";
import SearchButton from "../Components/Books/SearchButton";
import PropTypes from "prop-types";

class BookShelves extends Component {
  render() {
    const {books, updateBookShelf} = this.props;
    return (
      <>
        <header className="bg-green-900">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl text-white">MyReads</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:px-8 text-center">
          <BookList books={books} updateBookShelf={updateBookShelf}/>
        </main>
        <SearchButton/>
      </>
    );
  }
}

BookShelves.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired
}

export default BookShelves
