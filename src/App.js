import React, {useState, useEffect} from 'react';
import IssPosition from './IssPosition'
import Map from './Map'
import './App.css';

export default function App() {

  const position = usePosition();

  return (
    <div>
      <IssPosition position={position}></IssPosition>
      <Map position={position} />
    </div>
  );
}

function usePosition() {
  const [position, setPosition] = useState({latitude: 0, longitude: 0});

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://api.open-notify.org/iss-now.json')
        .then(response => response.json())
        .then(json => setPosition({
          latitude: json.iss_position.latitude,
          longitude: json.iss_position.longitude,
          timestamp: json.timestamp
        }));
    }, 5000);
    return () => clearInterval(interval);
  });

  return position;
}
