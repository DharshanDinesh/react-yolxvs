import React from 'react';
import './style.css';

export default function App() {
  const size = 2;
  const maxHeight = size + (size - 1);

  const hex = {
    1: {
      x: 750,
      y: 0,
    },
    2: {
      x: 1000,
      y: 500,
    },
    3: {
      x: 750,
      y: 1000,
    },
    4: {
      x: 250,
      y: 1000,
    },
    5: {
      x: 0,
      y: 500,
    },
    6: {
      x: 250,
      y: 0,
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
  function createCO(n = 2) {
    let a = [];
    for (let i = n - 1; i >= -n + 1; i--) {
      for (let j = n - 1; j >= -n + 1; j--) {
        if ((i === 0 && j === 0) || i !== j) {
          a.push([i, j]);
        } else {
          continue;
        }
      }
    }
    return a;
  }

  // const d = createCO(2);

  return (
    <div>
      <svg
        class="hexagon-mask"
        viewBox="0 0 1000 1000"
        version="1.1"
        width="100%"
        height="100%"
        style={{ border: '1px solid black' }}
      >
        <Otha pt={daa(hex)} />
      </svg>
    </div>
  );
}

function Otha({ pt }) {
  return <polygon points={pt}></polygon>;
}
