import React, { useEffect, useRef, useState } from 'react';
import './DateCarousel.scss';

const DateCarousel = () => {
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
  );
};

export default DateCarousel;
