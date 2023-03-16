import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({ handleSelect, setInput, input }) => {
  const [options, setOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const searchDimension = async () => {
    try {
      const urlSearch = `https://rickandmortyapi.com/api/location/?name=${input}`;
      const responseSearch = await axios.get(urlSearch);
      const optionsDimensions = responseSearch.data.results.map((option) => ({
        dimension: option.name,
        id: option.id,
      }));
      const filteredOptions = [...new Set(optionsDimensions)];
      setOptions(filteredOptions);
    } catch (error) {
      console.log('Parece que hay un error', error);
    }
  };

  useEffect(() => {
    if (input) {
      setShowOptions(true);
      searchDimension();
    } else {
      setShowOptions(false);
      setOptions([]);
    }
  }, [input]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search__input">
      <input
        type="text"
        className="search-bar"
        name="dimension"
        placeholder="Search dimension...."
        onChange={handleInput}
        value={input}
      />
      {showOptions && (
        <div className="search__options">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => {
                setInput(option.dimension);
                setShowOptions(false);
                handleSelect(option.id);
              }}
            >
              {option.dimension}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
