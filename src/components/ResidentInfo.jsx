import React, { useEffect, useState } from 'react';
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
  return (
    <>
      {residentInfo && (
        <div
          className={`card ${
            residentInfo.status === 'Alive'
              ? 'border-red'
              : residentInfo.status === 'unknown'
              ? 'border-yellow'
              : 'border-green'
          }`}
        >
          <img src={residentInfo.image} alt={residentInfo.name} />
          <div className="name__card">Name: {residentInfo.name}</div>
          <div>
            Type: {residentInfo.species} - {residentInfo.type}
          </div>
          <div>Gender: {residentInfo.gender}</div>
          <div>Status: {residentInfo.status}</div>
          <div>Location: {residentInfo.location.name}</div>
          <div>Episodes: {residentInfo.episode.length}</div>
        </div>
      )}
    </>
  );
};

export default ResidentInfo;
