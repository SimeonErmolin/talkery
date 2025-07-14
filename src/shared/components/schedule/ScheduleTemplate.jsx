import React, { useState } from 'react';
import './ScheduleTemplate.scss';
import TemplateSpecialistCard from './components/TemplateSpecialistСard.jsx';
import { useGetScheduleById } from '../../api/api.js';
import NoDataMessage from '../NoDataMessage.jsx';
import Tabs from '../SelectTabs/Tabs.jsx';
import DateCarousel from '../DateCarousel/DateCarousel.jsx';
import RegistrationTransferModal from '../RegistrationTransferModal/RegistrationTransferModal.jsx';
import ModalLayout from '../ModalLayout/ModalLayout.jsx';
import { useModal } from '../../hooks/useModal.js';

const clientTabs = [
  { key: 'sessions', label: 'Мої сеанси' },
  { key: 'specialists', label: 'Мої фахівці' },
];

const specialistTab = [{ key: 'sessions', label: 'Мої сеанси' }];

const subTabs = [
  { key: 'passed', label: 'Минулі' },
  { key: 'canceled', label: 'Скасовані' },
];

const ScheduleTemplate = ({ userType, userId }) => {
  const { modalIsOpened, openModal, closeModal } = useModal();
  const { data: cards, isLoading } = useGetScheduleById(userId);

  const [activeMainTab, setActiveMainTab] = useState('sessions');
  const [activeSubTab, setActiveSubTab] = useState('passed');

  if (isLoading) return <p>Загрузка...</p>;

  const renderCards = (data, place = '') => {
    if (!Array.isArray(data) || (data.length === 0 && place)) {
      return <NoDataMessage place={place} />;
    }

    return data.map((card, index) => (
      <TemplateSpecialistCard key={index} userType={userType} {...card} />
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
        tabs={userType === 'client' ? clientTabs : specialistTab}
        activeTab={activeMainTab}
        setActiveTab={setActiveMainTab}
      >
        {userType === 'specialist' && (
          <button className="setting-schedule" onClick={openModal}>
            <img src="/assets/icons/schedule/setting.svg" alt="" />
            <p>налаштувати розклад</p>
          </button>
        )}
      </Tabs>

      {userType === 'specialist' && (
        <div className="carousel-wrapper">
          <DateCarousel exClassName={'schedule'} />
        </div>
      )}

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

      <ModalLayout
        isOpen={modalIsOpened}
        onClose={closeModal}
        contentClassName={'registration-transfer'}
      >
        <RegistrationTransferModal settings />
      </ModalLayout>
    </div>
  );
};

export default ScheduleTemplate;
