import React from 'react';
import Search from './Search';

const LocationInfo = ({
  name,
  type,
  residents,
  handleSelect,
  value,
  setInput,
  input,
}) => {
  return (
    <div className="location__container">
      <p>Rick and Morty</p>
      <div className="info">
        <p>DIMENSION: {name.toUpperCase()}</p>
        <p>TYPE: {type.toUpperCase()}</p>
        <p>POPULATION: {residents.length}</p>
      </div>
      <Search
        handleSelect={handleSelect}
        value={value}
        setInput={setInput}
        input={input}
      />
      <div className="general__img">
        <img src="/img/rick.png" alt="" />
      </div>
    </div>
  );
};

export default LocationInfo;
