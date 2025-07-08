import React, { useState } from 'react';
import { Link } from 'react-router';
import './ProfilePage.scss';
import LanguageMenu from './components/LanguageMenu.jsx';
import HeaderGoToBack from '../../../../shared/components/HeaderGoToBack.jsx';

const ProfilePage = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  return (
    <>
      <HeaderGoToBack />
      <div className="user-profile">
        <div className="avatar">
          <img src="/src/assets/mockPhotos/Katerina.jpeg" alt="" />
        </div>
        <h1 className="name">Катерина Іваненко</h1>

        <div className="balance-wrapper">
          <Link to="/history" className="history">
            <img src="/src/assets/icons/history.svg" alt="" />
          </Link>
          <h2 className="balance-wrapper__title">Загальний баланс</h2>
          <span className="balance">€ 1260.00</span>
          <Link to="/deposit" className="deposit-button">
            <img src="/src/assets/icons/user-profile/deposit.svg" alt="" />
            Вивести
          </Link>
        </div>

        <ul className="user-links">
          <Link to={'/edit-profile'} className="user-links__item">
            <img src="/src/assets/icons/user-profile/user.svg" alt="" />
            Мої дані
          </Link>
          <li className="user-links__item">
            <img src="/src/assets/icons/user-profile/search.svg" alt="" />
            Мій профіль
          </li>
          <Link to={'/feedback'} className="user-links__item">
            <img src="/src/assets/icons/user-profile/feedback.svg" alt="" />
            Мої відгуки
          </Link>
          <li
            className="user-links__item"
            onClick={() => setIsLanguageMenuOpen(true)}
          >
            <img src="/src/assets/icons/user-profile/language.svg" alt="" />
            Мова
          </li>
          <li className="user-links__item">
            <img src="/src/assets/icons/user-profile/delete.svg" alt="" />
            Видалити профіль
          </li>
        </ul>

        <LanguageMenu
          isOpen={isLanguageMenuOpen}
          onClose={() => setIsLanguageMenuOpen(false)}
        />
      </div>
    </>
  );
};

export default ProfilePage;
