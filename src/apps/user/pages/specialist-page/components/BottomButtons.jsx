import React from 'react';

const BottomButtons = ({ navigate, openModal }) => {
  return (
    <div className="bottom-buttons">
      <button className="button secondary" onClick={() => navigate(-1)}>
        Назад
      </button>
      <button className="button primary" onClick={openModal}>
        Забронювати сесію
      </button>
    </div>
  );
};

export default BottomButtons;
