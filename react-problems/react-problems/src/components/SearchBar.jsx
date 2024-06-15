/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";
import "./searchbar.css";
import { useState } from "react";

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const result = data.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        // console.log(result);
        setResults(result)
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
