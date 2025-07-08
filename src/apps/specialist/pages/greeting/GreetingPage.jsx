import React from 'react';
import './GreetingPage.scss';
import { Link } from 'react-router';

const GreetingPage = () => {
  return (
    <div className={'greeting'}>
      <img src="/src/assets/logo/talkery.png" alt="" className={'logo'} />
      <p className="description">
        Радо вітаємо вас на нашій платформі <br />
        лишився один крок до початку практики
      </p>
      <img src="/src/assets/gif/hi.gif" alt="" className="gif" />
      <Link to={'/user-profile'} className={'button primary'}>
        Розпочати веріфікацію
      </Link>
      <p className="note">
        Пройдіть невеличку автоматичну веріфікацію та почніть працювати на
        платформі вже за 48 годин
      </p>
    </div>
  );
};

export default GreetingPage;
