import React from 'react';
import { Outlet } from 'react-router';
import Navigation from '../shared/components/Navigation.jsx';

const OnlyNavigation = ({ isSpecialist }) => {
  return (
    <>
      <div className="app-container">
        <Outlet />
      </div>
      <Navigation isSpecialist={isSpecialist} />
    </>
  );
};

export default OnlyNavigation;
