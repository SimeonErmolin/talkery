import React from 'react';
import { Link } from 'react-router';

const GiftCard = () => {
  return (
    <section className={'gift-section'}>
      <div className={'psychologist-cta secondary'}>
        <img src="/src/assets/gif/gift.gif" alt="" className={'gif'} />
        <h1>Talkery Gift Card</h1>
        <p>
          Подаруйте своїм близьким <br /> терапевтичні сеанси
        </p>
        <Link className="cta-link black" to={'/gift-cards'}>
          Оберіть подарункову картку
        </Link>
      </div>
    </section>
  );
};

export default GiftCard;
