// src/components/Canvas.js
import React from 'react';

const Canvas = ({ children }) => {
  return (
    <div
      style={{
        width: '100vw', // Set the canvas width to 100vw
        height: '100vh', // Set the canvas height to 100vh
        overflow: 'auto',
        position: 'relative',
        backgroundColor: '#f0f0f0',
      }}
    >
      {children}
    </div>
  );
};

export default Canvas;
