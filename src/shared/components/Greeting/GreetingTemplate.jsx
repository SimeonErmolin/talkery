import React from 'react';
import './GreetingTemplate.scss';
import { Link } from 'react-router';

const GreetingTemplate = ({ userType }) => {
  return (
    <div className={'greeting'}>
      <img src="/src/assets/logo/talkery.png" alt="" className={'logo'} />
      {userType === 'client' ? (
        <p className="description">
          Вітаємо вас на нашій платформі <br />
          та даруємо знижку <span>5€</span> на першу сесію
        </p>
      ) : (
        <p className="description">
          Радо вітаємо вас на нашій платформі <br />
          лишився один крок до початку практики
        </p>
      )}
      <img src="/src/assets/gif/hi.gif" alt="" className="gif" />
      <Link to={'/user-profile'} className={'button primary'}>
        {userType === 'client' ? 'Заповнити профіль' : 'Розпочати веріфікацію'}
      </Link>
      <p className="note">
        {userType === 'client'
          ? 'Вкажіть будь-ласка свої реальні дані щоб фахівцям було комфортніше взаємодіяти з вами на платформі'
          : 'Пройдіть невеличку автоматичну веріфікацію та почніть працювати на платформі вже за 48 годин'}
      </p>
    </div>
  );
};

export default GreetingTemplate;
