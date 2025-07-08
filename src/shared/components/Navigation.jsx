import React from 'react';
import { Link } from 'react-router';

const Navigation = ({ isSpecialist }) => {
  return (
    <nav className={'bottom-navigation'}>
      {!isSpecialist ? (
        <Link to={'/search'} className="bottom-navigation__item">
          <img src="/src/assets/icons/nav/calendar-search.svg" alt="" />
          <h3>Пошук</h3>
        </Link>
      ) : (
        <Link to={'/clients'} className="bottom-navigation__item">
          <img src="/src/assets/icons/nav/clients.svg" alt="" />
          <h3>Клієнти</h3>
        </Link>
      )}

      <Link to={'/schedule'} className="bottom-navigation__item">
        <img src="/src/assets/icons/nav/calendar.svg" alt="" />
        <h3>Розклад</h3>
      </Link>
      <Link to={'/bonuses'} className="bottom-navigation__item">
        <img src="/src/assets/icons/nav/gift.svg" alt="" />
        <h3>Бонуси</h3>
      </Link>
      <Link to={'/chats'} className="bottom-navigation__item">
        <img src="/src/assets/icons/nav/chat.svg" alt="" />
        <h3>Чат</h3>
      </Link>
    </nav>
  );
};

export default Navigation;
