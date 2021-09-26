import React, {Component} from "react";
import {PlusSmIcon} from '@heroicons/react/solid'
import {Link} from "react-router-dom";

class SearchButton extends Component {
  render() {
    return (
      <div className="fixed right-6 bottom-6">
        <Link to="/search">
          <button
            type="button"
            className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <PlusSmIcon className="h-6 w-6" aria-hidden="true"/>
          </button>
        </Link>
      </div>
    );
  }
}

export default SearchButton
