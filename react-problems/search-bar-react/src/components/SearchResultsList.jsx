/* eslint-disable react/prop-types */

import './searchresultslist.css';

const SearchResultsList = ({results}) => {
  return (
    <div className="result-list">
      {results && results.map((result, id)=> {
        return<div key={id}>{result.name}</div>
      })}
    </div>
  )
}

export default SearchResultsList;

