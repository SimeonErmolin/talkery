import React from 'react';
import './GreetingPage.scss';
import { Link } from 'react-router';

const GreetingPage = () => {
  return (
    <div className={'greeting'}>
      <img src="/src/assets/logo/talkery.png" alt="" className={'logo'} />
      <p className="description">
        Вітаємо вас на нашій платформі <br />
        та даруємо знижку <span>5€</span> на першу сесію
      </p>
      <img src="/src/assets/gif/hi.gif" alt="" className="gif" />
      <Link to={'/user-profile'} className={'button primary'}>
        Заповнити профіль
      </Link>
      <p className="note">
        Вкажіть будь-ласка свої реальні дані щоб фахівцям було комфортніше
        взаємодіяти з вами на платформі
      </p>
    </div>
  );
};

export default GreetingPage;
