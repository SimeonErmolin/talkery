import React from 'react';

const LanguageSelect = () => {
  return (
    <div className={'language-select-wrapper'}>
      <img src="/src/assets/language/ua.png" alt="flag" className="flag-icon" />
      <select name="language" className={'language-select'} defaultValue={'ua'}>
        <option value="ua">UA</option>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default LanguageSelect;
