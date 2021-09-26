import React, {Component} from "react";
import BookList from "../Components/Books/BookList";
import SearchButton from "../Components/Books/SearchButton";

class BookShelves extends Component {
  render() {
    return (
      <>
        <header className="bg-green-900">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl text-white">MyReads</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:px-8 text-center">
          <BookList/>
        </main>
        <SearchButton/>
      </>
    );
  }
}

export default BookShelves
