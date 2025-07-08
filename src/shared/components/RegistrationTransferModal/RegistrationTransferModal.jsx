import React, { useEffect, useRef, useState } from 'react';
import './RegistrationTransferModal.scss';

const RegistrationTransferModal = ({ registration }) => {
  const [activeTime, setActiveTime] = useState('12:00 - 13:00');
  const [activeDay, setActiveDay] = useState('1');

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      carousel.classList.add('active');
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      carousel.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      carousel.classList.remove('active');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1.5; // Скорость прокрутки
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('mousemove', handleMouseMove);

    return () => {
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      carousel.removeEventListener('mouseup', handleMouseUp);
      carousel.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="registration-transfer">
      <div className="header">
        <h3>Виберіть час</h3>
      </div>

      <div className="registration-transfer__content">
        <div className="seance-info">
          <div>
            <p className="seance-info__title">Сеанс 60 хвилин</p>
            <pre>
              <p className="seance-info__desc">
                {'Виберіть день та час, на який\n' +
                  'ви хочете забронювати сеанс'}
              </p>
            </pre>
          </div>
          <img
            src="/src/assets/mockPhotos/avatar.jpg"
            alt=""
            className="avatar"
          />
        </div>

        <div className="carousel" ref={carouselRef}>
          <button
            className={`carousel__item ${activeDay === '1' ? 'carousel__item--active' : ''}`}
            onClick={() => setActiveDay('1')}
          >
            <p className="carousel__item--day-week">Субота</p>
            <p className="carousel__item--date">1 березня</p>
          </button>

          <button
            className={`carousel__item ${activeDay === '2' ? 'carousel__item--active' : ''}`}
            onClick={() => setActiveDay('2')}
          >
            <p className="carousel__item--day-week">Неділя</p>
            <p className="carousel__item--date">2 березня</p>
          </button>

          <button
            className={`carousel__item ${activeDay === '3' ? 'carousel__item--active' : ''}`}
            onClick={() => setActiveDay('3')}
          >
            <p className="carousel__item--day-week">Понеділок</p>
            <p className="carousel__item--date">3 березня</p>
          </button>

          <button
            className={`carousel__item ${activeDay === '4' ? 'carousel__item--active' : ''}`}
            onClick={() => setActiveDay('4')}
          >
            <p className="carousel__item--day-week">Вівторок</p>
            <p className="carousel__item--date">4 березня</p>
          </button>
        </div>

        <p className="time-title">за вашим місцевим часом</p>

        <div className="time-buttons">
          <button
            className={`time-buttons__item ${activeTime === '10:00 - 11:00' ? 'time-buttons__item--active' : ''}`}
            onClick={() => setActiveTime('10:00 - 11:00')}
          >
            10:00 - 11:00
          </button>
          <button
            className={`time-buttons__item ${activeTime === '12:00 - 13:00' ? 'time-buttons__item--active' : ''}`}
            onClick={() => setActiveTime('12:00 - 13:00')}
          >
            12:00 - 13:00
          </button>
          <button
            className={`time-buttons__item ${activeTime === '16:00 - 17:00' ? 'time-buttons__item--active' : ''}`}
            onClick={() => setActiveTime('16:00 - 17:00')}
          >
            16:00 - 17:00
          </button>
          <button
            className={`time-buttons__item ${activeTime === '18:00 - 19:00' ? 'time-buttons__item--active' : ''}`}
            onClick={() => setActiveTime('18:00 - 19:00')}
          >
            18:00 - 19:00
          </button>
          <button
            className={`time-buttons__item ${activeTime === '20:00 - 21:00' ? 'time-buttons__item--active' : ''}`}
            onClick={() => setActiveTime('20:00 - 21:00')}
          >
            20:00 - 21:00
          </button>
        </div>
      </div>

      <div className="bottom-btn">
        {registration ? (
          <button className="button primary solid">
            Записатися та оплатити
          </button>
        ) : (
          <button className="button primary solid">Перенести сеанс</button>
        )}
      </div>
    </div>
  );
};

export default RegistrationTransferModal;
