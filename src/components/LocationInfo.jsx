import React from 'react';
const LocationInfo = ({ name, type, residents }) => {
  return (
    <>
      <div className="header__container">
        <img className="imagen__fixed" src="/public/img/back.png" alt="" />
        <p className="title">Rick and Morty</p>
        <div className='info__container'>
          <p>DIMENSION: {name.toUpperCase()}</p>
          <p>TYPE: {type.toUpperCase()}</p>
          <p>POPULATION: {residents.length}</p>
        </div>
      </div>
    </>
  );
};

export default LocationInfo;
