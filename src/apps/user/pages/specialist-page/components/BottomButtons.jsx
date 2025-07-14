import React from 'react';

const BottomButtons = ({ navigate, openModal, userType }) => {
  return (
    <div className="bottom-buttons">
      <button className="button secondary" onClick={() => navigate(-1)}>
        Назад
      </button>
      {userType === 'client' ? (
        <button className="button primary" onClick={openModal}>
          Забронювати сесію
        </button>
      ) : (
        <button className="button primary" onClick={() => alert('нет макета')}>
          Змінити дані профіля
        </button>
      )}
    </div>
  );
};

export default BottomButtons;
