import React from 'react';
import './SchedulePage.scss';
import TemplateSpecialistCard from './components/TemplateSpecialistCard/TemplateSpecialistСard.jsx';

const SchedulePage = () => {
  return (
    <div className="schedule-page">
      <span>
        <button className="button active">Мої сеанси</button>
        <button className="button">Мої фахівці</button>
      </span>

      <TemplateSpecialistCard
        date={'3 березня, Ср'}
        time={'11:00 - 12:00'}
        isOnline={true}
        available={true}
      />
      <TemplateSpecialistCard
        date={'5 березня, Пт'}
        time={'11:00 - 12:00'}
        isOnline={true}
        notAvailable={true}
      />

      <span>
        <button className="button active">Минулі</button>
        <button className="button">Скасовані</button>
      </span>

      <TemplateSpecialistCard
        date={'13 лютого, Чт'}
        time={'12:00 - 13:00'}
        passed={true}
      />
      <TemplateSpecialistCard
        date={'28 січня, Вт'}
        time={'12:00 - 13:00'}
        passed={true}
      />
      <button className="button transparent">Показати більше</button>
    </div>
  );
};

export default SchedulePage;
