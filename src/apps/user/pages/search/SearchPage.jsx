import React from 'react';
import './SearchPage.scss';
import SearchControls from './components/SearchControls.jsx';
import SpecialistList from './components/SpecialistList.jsx';
import { useSearchParams } from 'react-router';
import Tabs from '../../../../shared/components/SelectTabs/Tabs.jsx';

const SearchPage = ({ userType }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'psychologists';

  const tabs = [
    { key: 'psychologists', label: 'Психологи' },
    { key: 'esoterics', label: 'Езотерики', isNew: true },
  ];

  const handleTabChange = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <div className="page-container">
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={handleTabChange} />
      <SearchControls activeTab={activeTab} />
      <SpecialistList activeTab={activeTab} userType={userType} />
      <button className="button transparent">Показати ще 10</button>
    </div>
  );
};

export default SearchPage;
