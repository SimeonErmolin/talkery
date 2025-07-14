import React, { useState } from 'react';
import './UserProfile.scss';
import { Link } from 'react-router';
import HeaderGoToBack from '../HeaderGoToBack.jsx';
import { useModal } from '../../hooks/useModal.js';
import LanguageMenu from './components/LanguageMenu.jsx';
import ModalLayout from '../ModalLayout/ModalLayout.jsx';
import MoneyTemplate from './components/MoneyTemplate.jsx';
import MoneyHistoryTemplate from './components/MoneyHistoryTemplate.jsx';
import ReviewsModal from '../../../apps/user/pages/user-profile/components/ReviewsModal.jsx';

const UserProfile = ({ userType, avatarUrl, userName, userBalance }) => {
  const mainModal = useModal();
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openHistoryModal = () => {
    setModalType('history');
    mainModal.openModal();
  };

  const openDepositModal = () => {
    setModalType('deposit');
    mainModal.openModal();
  };

  return (
    <>
      <HeaderGoToBack />
      <div className="user-profile">
        <div className="avatar">
          <img src={avatarUrl} alt="" />
        </div>
        <h1 className="name">{userName}</h1>

        <div className="balance-wrapper">
          <button className="history" onClick={openHistoryModal}>
            <img src="/src/assets/icons/history.svg" alt="" />
          </button>

          <h2 className="balance-wrapper__title">Загальний баланс</h2>
          <span className="balance">€ {userBalance}</span>

          <button className="deposit-button" onClick={openDepositModal}>
            {userType === 'client' ? (
              <>
                <span>+</span>Поповнити
              </>
            ) : (
              <>
                <img src="/src/assets/icons/user-profile/deposit.svg" alt="" />
                Вивести
              </>
            )}
          </button>
        </div>

        <ul className="user-links">
          <Link to={'/edit-profile'} className="user-links__item">
            <img src="/src/assets/icons/user-profile/user.svg" alt="" />
            Мої дані
          </Link>

          {userType === 'client' && (
            <>
              <Link to={'/quiz'} className="user-links__item">
                <img src="/src/assets/icons/user-profile/search.svg" alt="" />
                Підбір психолога
              </Link>
              <Link to={'/affiliate'} className="user-links__item">
                <img src="/src/assets/icons/user-profile/friend.svg" alt="" />
                Запросити друга
              </Link>
              <Link to={'/gift-card'} className="user-links__item">
                <img src="/src/assets/icons/user-profile/gift.svg" alt="" />
                Подарунковий сертифікат
              </Link>
            </>
          )}

          {userType === 'specialist' && (
            <>
              <Link to={'/my-profile/5'} className="user-links__item">
                <img src="/src/assets/icons/user-profile/search.svg" alt="" />
                Мій профіль
              </Link>
              <li
                className="user-links__item"
                onClick={() => setIsReviewsModalOpen(true)}
              >
                <img src="/src/assets/icons/user-profile/feedback.svg" alt="" />
                Мої відгуки
              </li>
            </>
          )}

          <li
            className="user-links__item"
            onClick={() => setIsLanguageMenuOpen(true)}
          >
            <img src="/src/assets/icons/user-profile/language.svg" alt="" />
            Мова
          </li>

          {userType === 'specialist' && (
            <li className="user-links__item">
              <img src="/src/assets/icons/user-profile/delete.svg" alt="" />
              Видалити профіль
            </li>
          )}
        </ul>

        <LanguageMenu
          isOpen={isLanguageMenuOpen}
          onClose={() => setIsLanguageMenuOpen(false)}
        />

        <ModalLayout
          isOpen={mainModal.modalIsOpened}
          onClose={mainModal.closeModal}
        >
          {userType === 'client' && (
            <>
              {modalType === 'history' && (
                <MoneyHistoryTemplate userType={userType} />
              )}
              {modalType === 'deposit' && <MoneyTemplate userType={userType} />}
            </>
          )}

          {userType === 'specialist' && (
            <>
              {modalType === 'history' && (
                <MoneyHistoryTemplate userType={userType} />
              )}
              {modalType === 'deposit' && (
                <MoneyTemplate userType={userType} userBalance={userBalance} />
              )}
            </>
          )}
        </ModalLayout>

        <ReviewsModal
          onClose={() => setIsReviewsModalOpen(false)}
          isOpen={isReviewsModalOpen}
        />
      </div>
    </>
  );
};

export default UserProfile;
