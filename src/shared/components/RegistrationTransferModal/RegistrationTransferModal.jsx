import React, { useState } from 'react';
import './RegistrationTransferModal.scss';
import DateCarousel from '../DateCarousel/DateCarousel.jsx';

const timeSlots = [
  '8:00 - 9:00',
  '10:00 - 11:00',
  '12:00 - 13:00',
  '14:00 - 15:00',
  '16:00 - 17:00',
  '18:00 - 19:00',
  '20:00 - 21:00',
  '21:00 - 22:00',
];

const RegistrationTransferModal = ({ registration, settings, userType }) => {
  const [activeTime, setActiveTime] = useState(['12:00 - 13:00']);

  const handleTimeClick = (time) => {
    if (settings) {
      if (activeTime.includes(time)) {
        setActiveTime(activeTime.filter((t) => t !== time));
      } else {
        setActiveTime([...activeTime, time]);
      }
    } else {
      setActiveTime([time]);
    }
  };

  return (
    <div className="registration-transfer">
      <div className="header">
        <h3>
          {settings
            ? 'Налаштування розкладу'
            : userType === 'specialist'
              ? 'Перенесення сеансу'
              : 'Виберіть час'}
        </h3>
      </div>

      <div className="registration-transfer__content">
        <div className="seance-info">
          <div>
            {settings || userType === 'specialist' ? (
              <div className="seance-info__btn-date">
                <p>Березень 2025</p>
                <img src="/assets/icons/arrow-down.svg" alt="" />
              </div>
            ) : (
              <p className="seance-info__title">Сеанс 60 хвилин</p>
            )}

            <pre>
              <p className="seance-info__desc">
                {settings
                  ? 'Виберіть дні та години в які клієнти\n' +
                    'зможуть забронювати сеанс до вас:'
                  : userType === 'specialist'
                    ? 'Виберіть день та час на які ви\n' +
                      'бажаєте перенести сеанс з клієнтом:'
                    : 'Виберіть день та час, на який\n' +
                      'ви хочете забронювати сеанс'}
              </p>
            </pre>
          </div>
          <img
            src="/assets/mockPhotos/Katerina.jpeg"
            alt=""
            className="avatar"
          />
        </div>

        <DateCarousel />

        <p className="time-title">за вашим місцевим часом</p>

        <div className="time-buttons">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              className={`time-buttons__item ${activeTime.includes(slot) ? 'time-buttons__item--active' : ''}`}
              onClick={() => handleTimeClick(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <div className="bottom-btn">
        {registration ? (
          <button className="button primary solid">
            Записатися та оплатити
          </button>
        ) : settings ? (
          <button className="button primary solid">Зберегти графік</button>
        ) : (
          <button className="button primary solid">Перенести сеанс</button>
        )}
      </div>
    </div>
  );
};

export default RegistrationTransferModal;
