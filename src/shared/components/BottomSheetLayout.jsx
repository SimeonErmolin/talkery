import React from 'react';

const BottomSheetLayout = ({ isOpen, onClose, title, children }) => {
  return (
    <>
      <div
        className={`bottom-sheet-backdrop ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />

      <div className={`bottom-sheet ${isOpen ? 'active' : ''}`}>
        <div className="bottom-sheet-header">
          <span>{title}</span>
        </div>
        <div className="bottom-sheet-content">{children}</div>
      </div>
    </>
  );
};

export default BottomSheetLayout;
