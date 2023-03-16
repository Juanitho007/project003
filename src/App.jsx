import React, { useEffect, useState } from 'react';
import { getRandomNumber } from './utilits/getRandomNumber';
import axios from 'axios';
import Loader from './components/Loader';
import LocationInfo from './components/LocationInfo';
import ResidentInfo from './components/ResidentInfo';
import Search from './components/Search';
const App = () => {
  const [infoLocation, setInfoLocation] = useState(null);
  const [dimension, setDimension] = useState(null);
  const getIdLocationRandom = () => getRandomNumber(1, 126);

  const getLocationDimension = async (dimension) => {
    try {
      const url = `https://rickandmortyapi.com/api/location/${dimension}`;
      const response = await axios.get(url);
      setInfoLocation(response.data);
    } catch (error) {
      console.log('Parece que hay un error', error);
    }
  };

  const getLocation = async () => {
    try {
      const url = `https://rickandmortyapi.com/api/location/${getIdLocationRandom()}`;
      const response = await axios.get(url);
      setInfoLocation(response.data);
    } catch (error) {
      console.log('Parece que hay un error', error);
    }
  };
  useEffect(() => {
    if (dimension !== null) {
      getLocationDimension(dimension);
    } else {
      getLocation();
    }
  }, [dimension]);

  return (
    <div className="App">
      {infoLocation ? <LocationInfo {...infoLocation} /> : <Loader />}
      <Search handleSelect={setDimension} value={dimension} />
      <section className="cards__Location">
        {infoLocation &&
          infoLocation.residents.map((resident) => (
            <ResidentInfo key={resident} urlResident={resident} />
          ))}
      </section>
    </div>
  );
};

export default App;
