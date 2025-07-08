import React from 'react';
import './AffiliatePage.scss';
import { copyToClipboard } from '../../../../shared/utils/helpers.jsx';

const AffiliatePage = () => {
  return (
    <div className={'affiliate-page'}>
      <h2 className="title">
        Запроси друзів до <span>Talkery</span>
      </h2>
      <p className="description">
        Поділіться знижкою 10€ на першу сесію з друзями, які ще не користуються
        нашою платформою, та отримайте 10€ бонусів
      </p>
      <div className="link-section">
        <img src="/src/assets/banners/voucher.png" alt="" className="gif" />
        <h3>
          Подаруй знижку 10€ <br /> та отримай 10€ на рахунок
        </h3>
        <button
          className="copy-promo"
          onClick={() => {
            copyToClipboard('https://talkery.io/ref/123456789');
          }}
        >
          <img src="/src/assets/icons/share.svg" alt="" />
          Скопіювати промокод
        </button>
        <p className="not-allow">
          Реферальне запрошення для друзів <br /> стане доступним після першої
          сесії
        </p>
      </div>
      <div className="stats">
        <div className="stats__item">
          <img src="/src/assets/icons/link.svg" alt="" />
          <span>Сесій заброньовано за вашим промо</span>
          <div className="value">0</div>
        </div>
        <div className="stats__item">
          <img src="/src/assets/icons/user-profile/friend.svg" alt="" />
          <span>Нараховано бонусів</span>
          <div className="value">0 €</div>
        </div>
      </div>
      <div className="answers">
        <h2>Як це працює</h2>
        <ul className={'answers__items'}>
          <li className="answers__item">
            <div className="num">1</div>
            <p>
              Поділіться своїм промокодом з друзями <br /> які ще не
              зареєстровані на нашій платформі.
            </p>
          </li>
          <li className="answers__item">
            <div className="num">2</div>
            <p>
              Зареєструвавшись на платформі, друг або подруга обирає фахівця та
              бронює сесію зі знижкою 10€ застосувавши ваш промокод.
            </p>
          </li>
          <li className="answers__item">
            <div className="num">3</div>
            <p>
              Після проведення заброньованої сесії вам нараховується 10€ на
              рахунок, який ви можете використати для оплати своїх майбутніх
              сесій.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AffiliatePage;
