import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <svg
        class="hexagon-mask"
        viewBox="0 0 560 645"
        version="1.1"
        width="100%"
        height="100%"
      >
        <polygon points="270,0 0,160 0,485 270,645 560,480 560,160"></polygon>
        <polygon
          points="270,0 135,80 0,485 270,645 560,480 560,160"
          opacity="0.4"
          fill="red"
        ></polygon>
      </svg>
    </div>
  );
}
