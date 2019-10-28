import React from 'react';

export default function IssPosition(props) {
  return (
    <React.Fragment>
      <div>
        <span className='label'>Latitude:</span>
        <span>{props.position.latitude}</span>
      </div>
      <div>
        <span className='label'>Longitude:</span>
        <span>{props.position.longitude}</span>
      </div>
      <div>
        <span className='label'>Timestamp:</span>
        <span>{props.position.timestamp}</span>
      </div>
    </React.Fragment>
  );
}