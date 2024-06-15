import { useEffect, useState } from "react";

const SearchFunctionality = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  //simulate fetching suggestions from an API
  const fetchSuggestions = (query) => {
    const allSuggestion = [
      "apple",
      "banana",
      "orange",
      "grape",
      "strawberry",
      "blueberry",
      "blackberry",
      "kiwi",
      "mango",
      "pineapple",
    ];

    // filter suggestions based on query
    return allSuggestion.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  };

  useEffect(()=> {
    if(query.length> 0) {
        const res = fetchSuggestions(query);
        setSuggestions(res);
    } else {
        setSuggestions([]);
    }
  },[query]);

  return <div>
    <input type="text"
    placeholder="Search.."
    value={query}
    onChange={(e)=> setQuery(e.target.value)}
    />
    <ul>
        {
            suggestions && suggestions.map((suggestion, index)=> {
                <li key={index}>
                    {suggestion}
                </li>
            })
        }
    </ul>
  </div>;
};

export default SearchFunctionality;
