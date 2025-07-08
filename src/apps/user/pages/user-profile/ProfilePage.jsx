import React, { useState } from 'react';
import { Link } from 'react-router';
import './ProfilePage.scss';
import LanguageMenu from './components/LanguageMenu.jsx';
import PaymentHistoryModal from './components/PaymentHistoryModal.jsx';
import DepositModal from './components/DepositModal.jsx';
import { useModal } from '../../../../shared/hooks/useModal.js';
import HeaderGoToBack from '../../../../shared/components/HeaderGoToBack.jsx';
import ModalLayout from '../../../../shared/components/ModalLayout/ModalLayout.jsx';

const ProfilePage = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { modalIsOpened, openModal, closeModal } = useModal();
  const [modalType, setModalType] = useState(null);

  const openHistoryModal = () => {
    setModalType('history');
    openModal();
  };

  const openDepositModal = () => {
    setModalType('deposit');
    openModal();
  };

  return (
    <>
      <HeaderGoToBack />
      <div className="user-profile">
        <div className="avatar">
          <img src="/src/assets/mockPhotos/Alex.png" alt="" />
        </div>
        <h1 className="name">Олександр Немцов</h1>

        <div className="balance-wrapper">
          <button className="history" onClick={openHistoryModal}>
            <img src="/src/assets/icons/history.svg" alt="" />
          </button>

          <h2 className="balance-wrapper__title">Загальний баланс</h2>
          <span className="balance">€ 5.00</span>

          <button className="deposit-button" onClick={openDepositModal}>
            <span>+</span>Поповнити
          </button>
        </div>

        <ul className="user-links">
          <Link to={'/edit-profile'} className="user-links__item">
            <img src="/src/assets/icons/user-profile/user.svg" alt="" />
            Мої дані
          </Link>
          <Link to={'/search'} className="user-links__item">
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
          <li
            className="user-links__item"
            onClick={() => setIsLanguageMenuOpen(true)}
          >
            <img src="/src/assets/icons/user-profile/language.svg" alt="" />
            Мова
          </li>
        </ul>

        <LanguageMenu
          isOpen={isLanguageMenuOpen}
          onClose={() => setIsLanguageMenuOpen(false)}
        />

        <ModalLayout isOpen={modalIsOpened} onClose={closeModal}>
          {modalType === 'history' && <PaymentHistoryModal />}
          {modalType === 'deposit' && <DepositModal />}
        </ModalLayout>
      </div>
    </>
  );
};

export default ProfilePage;
