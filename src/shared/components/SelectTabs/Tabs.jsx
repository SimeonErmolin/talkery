import React from 'react';
import './Tabs.scss';

const Tabs = ({ tabs, activeTab, setActiveTab, second }) => {
  return (
    <div className={`tabs ${second ? 'second' : ''}`}>
      {tabs.map(({ key, label, isNew }) => (
        <button
          key={key}
          className={`button ${activeTab === key ? 'active' : ''}`}
          onClick={() => setActiveTab(key)}
        >
          {label} {isNew && <span className="new">новинка</span>}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
