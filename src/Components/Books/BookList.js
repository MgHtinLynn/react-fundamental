import React, {Component} from "react";
import List from "./List";
import {Shelves} from "../../Config/Shelves";

class BookList extends Component {

  filterByShelf = (books, shelfId) => {
    return books.filter((book) => (book.shelf === shelfId));
  }

  render() {
    const {books, updateBookShelf} = this.props;
    return (
      <>
        {Shelves.map((shelf) => (
          <List key={shelf.id} updateBookShelf={updateBookShelf} name={shelf.id}
                books={this.filterByShelf(books, shelf.id)} label={shelf.label}/>
        ))}
      </>
    );
  }
}

export default BookList
