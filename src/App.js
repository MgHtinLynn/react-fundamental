import React from "react";
import {Route} from "react-router-dom";
import BookShelves from "./Pages/BookShelves";
import {Search} from "./Pages/Search";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <BookShelves/>
      </Route>
      <Route exact path="/search">
        <Search/>
      </Route>
    </div>
  );
}

export default App;
