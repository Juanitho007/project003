import React, { useEffect, useState } from 'react';
import { getRandomNumber } from './utilits/getRandomNumber';
import axios from 'axios';
import Loader from './components/Loader';
import LocationInfo from './components/LocationInfo';
import ResidentInfo from './components/ResidentInfo';

const App = () => {
  const [infoLocation, setInfoLocation] = useState(null);
  const [dimension, setDimension] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');

  const getIdLocationRandom = () => getRandomNumber(1, 126);

  const getLocation = async () => {
    try {
      const url = `https://rickandmortyapi.com/api/location/${getIdLocationRandom()}`;
      const response = await axios.get(url);
      setInfoLocation(response.data);
    } catch (error) {
      console.log('Parece que hay un error', error);
    }
    setIsLoading(false);
  };

  const handleSelect = (id) => {
    setDimension(id);
    setInput('');
  };

  const getLocationDimension = async (dimension) => {
    try {
      const url = `https://rickandmortyapi.com/api/location/${dimension}`;
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
      setIsLoading(true);
      setTimeout(() => {
        getLocation();
      }, 3000);
    }
  }, [dimension]);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <LocationInfo
            {...infoLocation}
            handleSelect={handleSelect}
            value={dimension}
            setInput={setInput}
            input={input}
          />
          <section className="cards">
            {infoLocation &&
              infoLocation.residents.map((resident) => (
                <ResidentInfo key={resident} urlResident={resident} />
              ))}
          </section>
        </>
      )}
    </div>
  );
};

export default App;
