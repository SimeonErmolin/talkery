import React, { useState } from 'react';

const TabsList = {
  description: 'Про мене',
  psychologist: 'Мої цінності',
  esoteric: 'Як я працюю',
};

const Tabs = ({ specialization, description, work }) => {
  const [activeTab, setActiveTab] = useState(TabsList.description);

  return (
    <div className="specialist-card-container specialist-card-container__tabs">
      <div className="description-tabs">
        <button
          className={`description-tabs__tab ${activeTab === TabsList.description ? 'description-tabs__tab--active' : ''}`}
          onClick={() => setActiveTab(TabsList.description)}
        >
          {TabsList.description}
        </button>
        <button
          className={`description-tabs__tab ${activeTab === TabsList[specialization] ? 'description-tabs__tab--active' : ''}`}
          onClick={() => setActiveTab(TabsList[specialization])}
        >
          {TabsList[specialization]}
        </button>
      </div>

      <p className="specialist-card-container__text ">
        {activeTab === TabsList.description ? description : work}
      </p>

      <button className="button solid blue">Читати далі</button>
    </div>
  );
};

export default Tabs;
