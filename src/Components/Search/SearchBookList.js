import React, {Component} from "react";
import Book from "../Books/Book";

class SearchBookList extends Component {
  render() {
    const {label, books, updateBookShelf} = this.props
    return (
      <div>
        <div className="max-w-7xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-items-start border-b">
            <h1 className="text-2xl text-black pb-2">{ label }</h1>
          </div>
          <div className="bg-white mb-4">
            <div className="max-w-2xl mx-auto py-2 px-4 lg:py-4 lg:max-w-7xl">

              {books.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-4">
                  {books.map((book) => (
                    <Book key={book.id} book={book} updateBookShelf={updateBookShelf}/>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBookList
