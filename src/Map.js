import React, {useEffect} from 'react';
import world from './world.jpg';

export default function Map(props) {

  useEffect(() => {
    const canvas = document.getElementById('map'),
    ctx = canvas.getContext('2d');

    canvas.width = 355;
    canvas.height = 229;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const middle = {
      x: 177,
      y: 114
    };

    const current = {
      x: middle.x + (props.position.longitude / 180) * middle.x,
      y: middle.y - (props.position.latitude / 90) * middle.y,
    };

    var background = new Image();
    background.src = world;

    background.onload = () => {
      ctx.drawImage(background,0,0);
      ctx.fillRect(current.x, current.y, 25, 20);
    }
  });

  return (
    <canvas id='map' />
  )
}