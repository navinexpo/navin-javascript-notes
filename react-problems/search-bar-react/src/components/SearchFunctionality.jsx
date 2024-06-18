import { useState } from "react"
import "../App.css"
import SearchBar from "./SearchBar"
import SearchResultsList from "./SearchResultsList"

const SearchFunctionality = () => {
  const [ results, setResults] = useState([])

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults}/>
        <SearchResultsList />
      </div>
    </div>
  )
}

export default SearchFunctionality
