import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const Card = ({ text, onShowMore }) => {
  const [isResizing, setIsResizing] = useState(false);

  const handleShowMore = () => {
    onShowMore(text);
  };

  // Disable dragging when hovering over or clicking resizing handles
  const handleResizeStart = () => {
    setIsResizing(true);
  };

  const handleResizeStop = () => {
    setIsResizing(false);
  };

  return (
    <Draggable disabled={isResizing}>
      <div style={{ position: 'relative' }}>
        <ResizableBox
          width={200}
          height={150}
          minConstraints={[100, 100]}
          maxConstraints={[400, 400]}
          onResizeStart={handleResizeStart}
          onResizeStop={handleResizeStop}
          style={{
            border: '1px solid #ddd',
            padding: '15px',
            backgroundColor: '#fff',
            margin: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            cursor: isResizing ? 'default' : 'move', // Cursor indicates drag state
          }}
        >
          <div>
            <p style={{ marginBottom: '10px', color: '#333' }}>{text.slice(0, 50)}...</p>
            <button
              onClick={handleShowMore}
              style={{
                alignSelf: 'flex-start',
                padding: '5px 10px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              Show More
            </button>
          </div>
        </ResizableBox>
      </div>
    </Draggable>
  );
};

export default Card;
