import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Search = ({ handleSelect, value }) => {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState(value);
  useEffect(() => {
    searchDimension();
  }, [input]);
  const searchDimension = async () => {
    try {
      const urlSearch = `https://rickandmortyapi.com/api/location/?name=${input}`;
      const responseSearch = await axios.get(urlSearch);
      console.log(responseSearch.data);

      const optionsDimensions = responseSearch.data.results.map((option) => ({
        dimension: option.dimension,
        id: option.id,
      }));

      const filteredOptions = [...new Set(optionsDimensions)];
      setOptions(filteredOptions);
    } catch (error) {
      console.log('Parece que hay un error', error);
    }
  };
  return (
    <div className="search__input">
      <input
        type="text"
        className="search-bar"
        name="dimension"
        placeholder="Search dimension"
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="search__options">
        {options.map((option) => (
          <div key={option.id} onClick={() => handleSelect(option.id)}>
            {option.dimension}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
