import React, {Component} from "react";
import {Route} from "react-router-dom";
import BookShelves from "./Pages/BookShelves";
import {Search} from "./Pages/Search";
import {getAll, update} from "./Api/BooksAPI";

class App extends Component {
  state = {
    bookLists: []
  }

  getAllBooks = async () => {
    return await getAll();
  }

  updateBookShelf = (updateBook, shelf) => {
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

  render() {
    return (
      <div className="App">
        <Route exact path="/">
          <BookShelves books={this.state.bookLists} updateBookShelf={this.updateBookShelf}/>
        </Route>

        <Route path="/search" render={({history}) => (
          <Search
            books={this.state.bookLists}
            updateBookShelf={(updateBook, shelf) => {
              this.updateBookShelf(updateBook, shelf);
              history.push("/");
            }}/>
        )}/>
      </div>
    );
  }
}

export default App;
