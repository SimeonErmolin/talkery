import React from 'react';
import { Outlet } from 'react-router';
import Header from '../shared/components/Header/Header.jsx';
import Navigation from '../shared/components/Navigation.jsx';

const MainLayout = ({ isSpecialist }) => {
  return (
    <>
      <Header />
      <div className="app-container">
        <Outlet />
      </div>
      <Navigation isSpecialist={isSpecialist} />
    </>
  );
};

export default MainLayout;
