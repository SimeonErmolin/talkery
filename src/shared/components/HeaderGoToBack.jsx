import React from 'react';
import { useNavigate } from 'react-router';

const HeaderGoToBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={'header-go-to-back'}>
      <button onClick={handleGoBack}>
        <img src="/assets/icons/arrow-back.svg" alt="" />
      </button>
    </div>
  );
};

export default HeaderGoToBack;
