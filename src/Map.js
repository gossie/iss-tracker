import React, {useEffect} from 'react';
import world from './world.png';

export default function Map(props) {

  useEffect(() => {
    const canvas = document.getElementById('map'),
    ctx = canvas.getContext('2d');

    canvas.width = 350;
    canvas.height = 180;

    const middle = {
      x: 175,
      y: 90
    };

    const current = {
      x: middle.x + (props.position.longitude / 180) * middle.x,
      y: middle.y - (props.position.latitude / 90) * middle.y,
    };

    const background = new Image();
    background.src = world;

    background.onload = () => {
      ctx.drawImage(background,0,0);
      ctx.beginPath();
      ctx.arc(current.x, current.y, 7, 0, 2 * Math.PI);
      ctx.fill();
    }
  });

  return (
    <div className='tile is-parent'>
      <div className='tile is-child box'>
        <canvas id='map' />
      </div>
    </div>
  )
}