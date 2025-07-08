import React, { useState } from 'react';
import './GiftCardPage.scss';
import { useModal } from '../../../../shared/hooks/useModal.js';
import { copyToClipboard } from '../../../../shared/utils/helpers.jsx';
import ModalLayout from '../../../../shared/components/ModalLayout/ModalLayout.jsx';

const giftCards = [
  {
    id: 1,
    sessions: '1 сесія',
    price: '€ 20',
    description:
      'Надає можливість протестувати сервіс та зрозуміти чи підходить вам терапія в онлайн форматі',
    link: '/buy-gift/20',
  },
  {
    id: 2,
    sessions: '3 сесії',
    price: '€ 50',
    description:
      'Дають можливість сформулювати запит накреслити план дій та отримати підтримку',
    link: '/buy-gift/50',
  },
  {
    id: 3,
    sessions: '5 сесій',
    price: '€ 100',
    description:
      'Допомагають зробити перші великі кроки назустріч собі та відчути себе значно краще',
    link: '/buy-gift/100',
  },
  {
    id: 4,
    sessions: '10 сесій',
    price: '€ 200',
    description:
      'Дають змогу опрацювати невеличкі проблеми та просунутися у вирішенні більш складних запитів',
    link: '/buy-gift/200',
  },
];

const GiftCardPage = () => {
  const { modalIsOpened, openModal, closeModal } = useModal();
  const [selectedPrice, setSelectedPrice] = useState(null);

  const scrollToCardSection = () => {
    const cardSection = document.querySelector('.gift-cards');
    cardSection.scrollIntoView({ behavior: 'smooth' });
  };

  const openM = (price) => {
    setSelectedPrice(price);
    openModal();
  };

  return (
    <>
      <div className="gift-card-page">
        <h2 className="title">
          Найкращий подарунок <br /> це ваша турбота 🤞🏼
        </h2>
        <p className="description">
          Даруйте близьким грошові сертифікати <br /> на оплату сесій з
          психотерапевтом
        </p>
        <img
          src="/src/assets/banners/gift-card-ua.png"
          alt=""
          className="banner"
        />
        <button onClick={scrollToCardSection} className="button primary">
          Обрати сертифікат
        </button>

        <section className="gift-cards">
          <h3 className="gift-cards__title">Подарункові картки</h3>
          <p className="gift-cards__description">
            Ви можете подарувати сертифікат <br /> на сесії з психологом просто
            зараз
          </p>
          <ul className="card__items">
            {giftCards.map(({ id, sessions, price, description }) => (
              <li key={id} className="card__item">
                <span className="sessions">{sessions}</span>
                <p className="description">{description}</p>
                <span className="price">{price}</span>
                <button onClick={() => openM(price)} className="button primary">
                  Обрати
                </button>
                <img
                  className="gift-banner"
                  src="/src/assets/banners/gift-item.svg"
                  alt=""
                />
              </li>
            ))}
          </ul>
        </section>

        <div className="important">
          <h2 className="important__title">Це дуже важливо</h2>
          <p className="important__description">
            Психотерапія дасть результат, тільки якщо людина готова до роботи.
            Щоб подарунок приніс користь та не поранив даруйте сертифікат тільки
            тому, хто хоче звернутися до психотерапевта.
            <br />
            <br />
            Онлайн консультації не підходять людям у критичному стані, у такому
            разі варто звернутися до лікаря психіатра.
          </p>
        </div>

        <div className="gift-card-share">
          <h2 className="gift-card-share__title">
            От би мені подарували сертифікат...
          </h2>
          <p className="gift-card-share__description">
            Якщо ви самі будете раді такому подарунку просто надішліть посилання
            на цю сторінку друзям, або поділіться ним у соцмережах
          </p>
          <button
            className="gift-card-share__link"
            onClick={() => {
              copyToClipboard(window.location.href);
            }}
          >
            Скопіювати посилання
          </button>
        </div>
      </div>
      <ModalLayout
        onClose={closeModal}
        isOpen={modalIsOpened}
        contentClassName={'gift-card-modal'}
      >
        <h1 className="title">Подарунковий сертифікат</h1>
        <p className="description">
          Уважно заповніть усі поля та оплатіть сертифікат
        </p>
        <div className="input-forms">
          <div className="input-form">
            <div className="label">Від кого</div>
            <div className="input-wrapper">
              <input type="text" />
            </div>
            <p className="description">Це ім’я буде зазначено на сертифікаті</p>
          </div>
          <div className="input-form">
            <div className="label">Кому</div>
            <div className="input-wrapper">
              <input type="text" />
            </div>
            <p className="description">Це ім’я буде зазначено на сертифікаті</p>
          </div>
          <div className="input-form">
            <div className="label">Email адреса</div>
            <div className="input-wrapper">
              <input type="text" />
            </div>
            <p className="description">На неї ми відправимо сертифікат</p>
          </div>
        </div>
        <button className="button primary gift-card-modal__button">
          Оплатити {selectedPrice}
        </button>
      </ModalLayout>
    </>
  );
};

export default GiftCardPage;
