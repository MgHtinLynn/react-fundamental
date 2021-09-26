import React, {Component} from "react";
import {getAll, update} from "../../Api/BooksAPI";
import List from "./List";
import {Shelves} from "../../Config/Shelves";

class BookList extends Component {
  state = {
    bookLists: []
  }

  getAllBooks = async () => {
    return await getAll();
  }

  updateBookSelf = (updateBook, shelf) => {
    update(updateBook, shelf).then(() => {
      updateBook.shelf = shelf;
      this.setState((prev) => ({
        bookLists: [...prev.bookLists.filter((book) => (updateBook.id !== book.id)), updateBook]
      }));
    })
  }

  componentDidMount() {
    this.getAllBooks().then((books) => {
      this.setState({bookLists: books})
    });
  }

  filterByShelf = (books, shelfId) => {
    return books.filter((book) => (book.shelf === shelfId));
  }

  render() {
    return (
      <>
        {Shelves.map((shelf) => (
            <List key={shelf.id} updateBookShelf={this.updateBookSelf} name={shelf.id} books={this.filterByShelf(this.state.bookLists, shelf.id)} label={shelf.label}/>
          ))}
      </>
    );
  }
}

export default BookList
