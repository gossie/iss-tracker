import React, {useState, useEffect} from 'react';
import IssPosition from './IssPosition'
import Map from './Map'
import Splash from './Splash';
import './App.css';

export default function App() {

  const position = usePosition();
  
  return (
    <div>
      <h1>ISS tracker</h1>
      {position
        ?
          <React.Fragment>
            <IssPosition position={position}></IssPosition>
            <Map position={position} />
          </React.Fragment>
        :
          <Splash />
      }
    </div>
  );
}

function usePosition() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => response.json())
        .then(json => setPosition({
          latitude: json.latitude,
          longitude: json.longitude,
          timestamp: json.timestamp
        }));
    }, 5000);
    return () => clearTimeout(timeout);
  });

  return position;
}
