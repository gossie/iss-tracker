import React, {useState, useEffect} from 'react';

export default function Splash(props) {
  const seconds = useSeconds();

  return (
    <div className='tile is-parent'>
      <div className='tile is-child box is-size-2 has-text-centered'>
        <div>{seconds}</div>
      </div>
    </div>
  );
}


function useSeconds() {
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    const newSeconds = seconds > 0 ? seconds - 1 : 0;
    const id = setTimeout(() => setSeconds(newSeconds), 1000);
    return () => clearTimeout(id);
  });
  return seconds;
}