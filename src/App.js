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

  function daa(a = hex, b = 1, c = 100) {
    let str = [];
    const adsf = Object.values(a);

    adsf.forEach((data, index) => {
      str = [...str, data.x / b, data.y / b];
    });
    return str;
  }

  function cressateCO(n = 2) {
    let a = [];
    for (let i = n - 1; i >= -n + 1; i--) {
      for (let j = n - 1; j >= -n + 1; j--) {
        if (i + j === n || i + j === -n) {
          continue;
        } else if (i === n - 1 && j === n - 1) {
          continue;
        } else if (i === -n + 1 && j === -n + 1) {
          continue;
        } else {
          a.push([i, j]);
        }
      }
    }
    return a;
  }

  function add(n = 2) {
    var max = n + (n - 1);
    let a = [];
    for (let i = n - 1; i >= -n + 1; i--) {
      a.push(max - Math.abs(i));
    }
    return a;
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        margin: '1%',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {[...Array(2)].map((e, i) => (
          <Otha pt={daa(hex)} />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {[...Array(3)].map((e, i) => (
          <Otha pt={daa(hex)} />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {[...Array(2)].map((e, i) => (
          <Otha pt={daa(hex)} />
        ))}
      </div>
    </div>
  );
}

function Otha({ pt }) {
  return (
    <svg
      class="hexagon-mask"
      viewBox="0 0 1000 1000"
      width="100px"
      height="100px"
      version="1.1"
      style={{ margin: '2%' }}
    >
      <polygon points={pt}></polygon>
    </svg>
  );
}
