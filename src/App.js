import React, {useState, useEffect} from 'react';
import IssPosition from './IssPosition'
import Map from './Map'
import './App.css';

export default function App() {

  const position = usePosition();

  return (
    <div>
      <IssPosition position={position}></IssPosition>
      {position.latitude >= 0 && position.longitude >= 0 &&
        <Map position={position} />
      }
    </div>
  );
}

function usePosition() {
  const [position, setPosition] = useState({latitude: -1, longitude: -1});

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => response.json())
        .then(json => setPosition({
          latitude: json.latitude,
          longitude: json.longitude,
          timestamp: json.timestamp
        }));
    }, 5000);
    return () => clearInterval(interval);
  });

  return position;
}
