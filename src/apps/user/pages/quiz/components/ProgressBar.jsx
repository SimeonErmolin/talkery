import React from 'react';

const ProgressBar = ({ currentPage, totalPages }) => {
  const bars = [];

  for (let i = 1; i <= totalPages; i++) {
    bars.push(
      <div
        key={i}
        style={{
          height: '4px',
          flex: 1,
          margin: '0 3px',
          backgroundColor: i <= currentPage ? '#262626' : '#CFCFCF',
          borderRadius: '4px',
          transition: 'background-color 0.3s',
        }}
      />
    );
  }

  return <div style={{ display: 'flex', marginBottom: '16px' }}>{bars}</div>;
};

export default ProgressBar;
