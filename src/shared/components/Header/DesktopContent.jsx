import React from 'react';
import Navigation from './Navigation.jsx';
import LanguageSelect from './LanguageSelect.jsx';

const DesktopContent = () => {
  return (
    <div className={'desktop-content'}>
      <Navigation />
      <LanguageSelect />
    </div>
  );
};

export default DesktopContent;
