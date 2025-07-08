import React, { useState } from 'react';
import BottomSheetLayout from '../../../../../shared/components/BottomSheetLayout.jsx';

const RegTransMenu = ({ isOpen, onClose, openTransferModal }) => {
  const [currentAction, setCurrentAction] = useState('transfer');

  return (
    <BottomSheetLayout isOpen={isOpen} onClose={onClose} title="">
      <div
        className={`option ${currentAction === 'cancel' && 'checked'}`}
        onClick={() => setCurrentAction('cancel')}
      >
        Скасувати сеанс
      </div>
      <div
        className={`option ${currentAction === 'transfer' && 'checked'}`}
        onClick={() => setCurrentAction('transfer')}
      >
        Перенести сеанс
      </div>

      {currentAction === 'transfer' ? (
        <button
          className="button primary modal-btn"
          onClick={() => {
            onClose();
            openTransferModal();
          }}
        >
          Підтвердити перенесення
        </button>
      ) : (
        <button className="button primary modal-btn" onClick={onClose}>
          Підтвердити скасування
        </button>
      )}
    </BottomSheetLayout>
  );
};

export default RegTransMenu;
