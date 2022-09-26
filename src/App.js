import React from 'react';
import './style.css';

export default function App() {
  const hex = {
    1: {
      x: 0,
      y: 270,
    },
    2: {
      x: 160,
      y: 0,
    },
    3: {
      y: 0,
      x: 485,
    },
    4: {
      y: 270,
      x: 645,
    },
    5: {
      y: 560,
      x: 480,
    },
    6: {
      y: 560,
      x: 160,
    },
  };

  function daa(a = hex, b = 1) {
    let str = [];
    const adsf = Object.values(a);
    adsf.forEach((data) => {
      str = [...str, data.x / b, data.y / b];
    });
    return str;
  }

  return (
    <div>
      <svg
        class="hexagon-mask"
        viewBox="0 0 560 645"
        version="1.1"
        width="100%"
        height="100%"
      >
        <Otha pt={daa(hex, 3)} />
      </svg>
    </div>
  );
}

function Otha({ pt }) {
  return <polygon points={pt}></polygon>;
}
