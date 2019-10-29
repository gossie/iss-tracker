import React from 'react';

export default function IssPosition(props) {
  return (
    <div className='tile is-parent is-4'>
      <div className='tile is-child box'>
        <div>
          <span className='label'>Latitude:</span>
          <span>{props.position.latitude}</span>
        </div>
        <div>
          <span className='label'>Longitude:</span>
          <span>{props.position.longitude}</span>
        </div>
        <div>
          <span className='label'>Zeit:</span>
          <span>{new Date().toString()}</span>
        </div>
      </div>
    </div>
  );
}