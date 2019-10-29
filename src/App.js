import React, {useState, useEffect} from 'react';
import IssPosition from './IssPosition'
import Map from './Map'
import Splash from './Splash';
import './App.css';

export default function App() {

  const position = usePosition();
  
  return (
    <div>
      <h1 className='title is-1'>ISS tracker</h1>
      <div className='tile is-ancestor'>
        <div className='tile is-parent'>
          {position
            ?
              <React.Fragment>
                <div className='tile is-parent is-4'>
                  <div className='tile is-child box'>
                    <IssPosition position={position}></IssPosition>
                  </div>
                </div>
                <div className='tile is-parent'>
                  <div className='tile is-child box'>
                    <Map position={position} />
                  </div>
                </div>
              </React.Fragment>
            :
              <div className='tile is-child box is-size-2 has-text-centered'>
                <Splash />
              </div>
          }
        </div>
      </div>
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
