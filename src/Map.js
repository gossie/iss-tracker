import React, {useEffect, useRef} from 'react';
import world from './world.png';

export default function Map(props) {
  const map = useRef(null);

  useEffect(() => {
    const canvas = map.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 350;
    canvas.height = 180;

    const middle = {
      x: 165,
      y: 115
    };

    const current = {
      x: middle.x + (props.position.longitude / 180) * middle.x,
      y: middle.y - (props.position.latitude / 90) * middle.y,
    };

    current.x = current.x > canvas.width ? canvas.width : current.x;
    current.y = current.y > canvas.height ? canvas.height : current.y;

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
        <canvas ref={map} />
      </div>
    </div>
  )
}