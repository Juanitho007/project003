import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const loadResident = async () => {
    try {
      const response = await axios.get(urlResident);
      setResidentInfo(response.data);
    } catch (error) {
      console.log('Parece que hay un error', error);
    }
  };

  useEffect(() => {
    loadResident();
  }, []);

  if (!residentInfo) {
    return null;
  }

  const { name, status, species, type, gender, image, location, episode } = residentInfo;

  const getStatusClass = () => {
    if (status === 'Alive') {
      return 'alive';
    }
    if (status === 'unknown') {
      return 'unknown';
    }
    return 'dead';
  };

  return (
    <div className={`resident__info ${getStatusClass()}`}>
      <img src={image} alt={name} />
      <div className="name">Name: {name}</div>
      <div>
        Type: {species} - {type}
      </div>
      <div>Gender: {gender}</div>
      <div>Status: {status}</div>
      <div>Location: {location.name}</div>
      <div>Episodes: {episode.length}</div>
    </div>
  );
};

export default ResidentInfo;
