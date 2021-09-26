import React, {Component} from "react";
import SelectShelf from "./SelectShelf";

class Book extends Component {
  onUpdateBookShelf = (shelf) => {
    this.props.updateBookShelf(this.props.book, shelf)
  }

  render() {
    const {book} = this.props
    const thumbnailImage = book.hasOwnProperty('imageLinks') ? book.imageLinks.thumbnail : 'https://books.google.com/books/content?printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api';
    return (
      <div key={book.id} className="group relative">

        <div
          className="mb-8 rounded-md overflow-hidden">
          <SelectShelf key={book.id} updateBookShelf={this.onUpdateBookShelf} shelf={book.shelf}/>
          <img
            src={thumbnailImage}
            alt={book.title}
            className="z-0 relative w-32 h-48 object-center object-cover"
          />
        </div>

        <div className="z-auto mt-8 flex justify-start">
          <div className="text-left">
            <h3 className="text-sm text-gray-700">
              <a href={book.previewLink}>
                <span aria-hidden="true" className="absolute"/>
                {book.title}
              </a>
            </h3>
            {book.authors && (
              <p className="mt-1 text-sm text-gray-500">{book.authors[0]}</p>
            )}

          </div>
        </div>
      </div>
    );
  }
}

export default Book
