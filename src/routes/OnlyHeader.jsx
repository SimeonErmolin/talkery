import React from 'react';
import { Outlet } from 'react-router';
import Header from '../shared/components/Header/Header.jsx';

const OnlyHeader = () => {
  return (
    <>
      <Header />
      <div className="app-container">
        <Outlet />
      </div>
    </>
  );
};

export default OnlyHeader;
