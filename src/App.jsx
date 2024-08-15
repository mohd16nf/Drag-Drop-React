// src/App.js
import React, { useState } from 'react';
import Canvas from './components/Canvas';
import Card from './components/Card';
import Popup from './components/Popup';
import { ArcherContainer, ArcherElement } from 'react-archer';
import 'react-resizable/css/styles.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [popupText, setPopupText] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cardCount, setCardCount] = useState(0);
  const [newCardText, setNewCardText] = useState('');

  const handleShowMore = (text) => {
    setPopupText(text);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleInputChange = (e) => {
    setNewCardText(e.target.value);
  };

  const addCardWithInputText = () => {
    if (newCardText.trim() === '') {
      alert('Card text cannot be empty');
      return;
    }
    const newCard = {
      id: `card-${cardCount}`,
      text: newCardText,
    };
    setCards([...cards, newCard]);
    setCardCount(cardCount + 1);
    setNewCardText(''); // Clear input field after adding
  };

  const addCardWithDummyText = () => {
    const dummyText = `Card ${cardCount}: This is some dummy text that can be expanded by clicking on the "Show More" button.`;
    const newCard = {
      id: `card-${cardCount}`,
      text: dummyText,
    };
    setCards([...cards, newCard]);
    setCardCount(cardCount + 1);
  };

  return (
    <div style={{ padding: '10px' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newCardText}
          onChange={handleInputChange}
          placeholder="Enter card text"
          style={{
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            marginRight: '10px',
            width: '300px',
          }}
        />
        <button
          onClick={addCardWithInputText}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginRight: '10px',
          }}
        >
          Add Card with Text
        </button>
        <button
          onClick={addCardWithDummyText}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28A745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Add Card with Dummy Text
        </button>
      </div>
      <Canvas>
        <ArcherContainer strokeColor="black">
          {cards.map((card, index) => (
            <ArcherElement
              key={card.id}
              id={card.id}
              relations={
                index > 0
                  ? [
                      {
                        targetId: cards[index - 1].id,
                        targetAnchor: 'top',
                        sourceAnchor: 'bottom',
                        style: { strokeColor: 'blue', strokeWidth: 2 },
                      },
                    ]
                  : []
              }
            >
              <Card id={card.id} text={card.text} onShowMore={handleShowMore} />
            </ArcherElement>
          ))}
        </ArcherContainer>
      </Canvas>
      {isPopupOpen && <Popup text={popupText} onClose={handleClosePopup} />}
    </div>
  );
};

export default App;
