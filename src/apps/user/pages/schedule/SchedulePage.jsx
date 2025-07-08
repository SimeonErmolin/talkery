import React, { useState } from 'react';
import './SchedulePage.scss';
import TemplateSpecialistCard from './components/TemplateSpecialistСard.jsx';
import { useGetSchedule } from '../../../../shared/hooks/api.js';
import NoDataMessage from '../../../../shared/components/NoDataMessage.jsx';
import Tabs from '../../../../shared/components/SelectTabs/Tabs.jsx';

const mainTabs = [
  { key: 'sessions', label: 'Мої сеанси' },
  { key: 'specialists', label: 'Мої фахівці' },
];

const subTabs = [
  { key: 'passed', label: 'Минулі' },
  { key: 'canceled', label: 'Скасовані' },
];

const SchedulePage = () => {
  const { data: cards, isLoading } = useGetSchedule();

  const [activeMainTab, setActiveMainTab] = useState('sessions');
  const [activeSubTab, setActiveSubTab] = useState('passed');

  if (isLoading) return <p>Загрузка...</p>;

  const renderCards = (data, place = '') => {
    if (!Array.isArray(data) || (data.length === 0 && place)) {
      return <NoDataMessage place={place} />;
    }

    return data.map((card, index) => (
      <TemplateSpecialistCard key={index} {...card} />
    ));
  };

  const hasSessions =
    cards.sessions?.length > 0 &&
    cards.passed?.length > 0 &&
    cards.canceled?.length > 0;

  const hasSpecialists = cards.specialists?.length > 0;

  return (
    <div className="page-container">
      <Tabs
        tabs={mainTabs}
        activeTab={activeMainTab}
        setActiveTab={setActiveMainTab}
      />

      {activeMainTab === 'sessions' ? (
        <>
          {renderCards(cards.sessions, 'sessions')}
          <Tabs
            tabs={subTabs}
            activeTab={activeSubTab}
            setActiveTab={setActiveSubTab}
            second={true}
          />
          {renderCards(cards[activeSubTab], activeSubTab)}

          {hasSessions && (
            <button className="button transparent">Показати більше</button>
          )}
        </>
      ) : (
        <>
          {renderCards(cards.specialists, 'specialists')}

          {hasSpecialists && (
            <button className="button transparent">Показати більше</button>
          )}
        </>
      )}
    </div>
  );
};

export default SchedulePage;
