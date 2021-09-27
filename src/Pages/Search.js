import {useState, useCallback} from "react";
import {Popover} from '@headlessui/react'
import {SearchIcon} from '@heroicons/react/solid'
import {ArrowLeftIcon} from '@heroicons/react/outline'
import {Link} from "react-router-dom";
import {search as SearchByQuery} from '../Api/BooksAPI'
import debounce from 'lodash.debounce';
import SearchBookList from "../Components/Search/SearchBookList";
import PropTypes from "prop-types";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Search({books, updateBookShelf}) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const searchQuery = (searchValue) => {
    SearchByQuery(searchValue).then((results) => {
      if (results !== undefined && results.length > 0) {
        setResults(results)
      } else {
        setResults([])
      }
    })
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((searchValue) => searchQuery(searchValue), 500),
    []
  );

  const handleChange = (e) => {
    setQuery(e.target.value)
    debouncedSearch(e.target.value)
  }

  return (
    <>
      <div className="w-full">
        <Popover
          as="header"
          className={({open}) =>
            classNames(
              open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
              'bg-white shadow-sm lg:static lg:overflow-y-visible'
            )
          }
        >
          {({open}) => (
            <>
              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between space-x-4">
                  <div className="flex md:left-0 md:inset-y-0">
                    <div className="flex-shrink-0 flex items-center">
                      <Link to="/">
                        <ArrowLeftIcon className="h-6 w-6" aria-hidden="true"/>
                      </Link>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 md:px-8 lg:px-0">
                    <div
                      className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                      <div className="w-full">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                          </div>
                          <input
                            id="search"
                            name="search"
                            value={query}
                            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder="Search"
                            onChange={handleChange}
                            type="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </>
          )}
        </Popover>

        {results.length > 0 && (
          <SearchBookList books={books} searchBooks={results} label="Search Results" updateBookShelf={updateBookShelf}/>
        )}

      </div>
    </>
  );

}

Search.prototype = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired
}

