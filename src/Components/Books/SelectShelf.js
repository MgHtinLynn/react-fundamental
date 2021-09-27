import React, {Component} from "react";
import {Shelves} from "../../Config/Shelves";

class SelectShelf extends Component {
  render() {
    const {updateBookShelf, shelf} = this.props
    return (
      <div
        className="bg-dropDown-icon bg-no-repeat bg-center bg-20 shadow absolute right-10 top-44 z-20 rounded-full w-10 h-10 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        <select
          id="shelf"
          name="shelf"
          className="w-full h-full opacity-0 cursor-pointer"
          defaultValue={shelf}
          onChange={(e) => updateBookShelf(e.target.value)}
        >
          <option disabled>Move To ...</option>
          <option value="none">None</option>
          {Shelves.map(shelf => (
            <option key={shelf.id} value={shelf.id}>{shelf.label}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectShelf

