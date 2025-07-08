import React from 'react';
import { Link } from 'react-router';

const TherapistsCTA = () => {
  return (
    <section className={'top-banners'}>
      <div className={'psychologist-cta'}>
        <h1>
          Поєднуємо <br /> фахівців та клієнтів{' '}
          <span className={'smile'}>🤝</span>
        </h1>
        <img src="/src/assets/gif/hands.gif" alt="" className={'gif'} />
        <h2>Відправляйте запит на співпрацю</h2>
        <div className="cta-buttons">
          <Link className="cta-link black" to={'/registration'}>
            Зареєструватись
          </Link>
          <Link className="cta-link" to={'/cabinet'}>
            Перейти у кабінет
          </Link>
        </div>
        <div className="verified-psychologists">
          <p>
            <span className={'desktop-hide'}>⭐</span> розширюйте свою практику
            з нами ⭐
          </p>
        </div>
      </div>
      <div className="secondary-container">
        <div className={'psychologist-cta secondary'}>
          <h1>Я психолог</h1>
          <img src="/src/assets/gif/duck3.gif" alt="" className={'gif'} />
          <Link className="cta-link black" to={'/psychologists'}>
            Зареєструватися
          </Link>
        </div>
        <div className={'psychologist-cta secondary esoteric'}>
          <h1>Я езотерик</h1>
          <img src="/src/assets/gif/esoteric.gif" alt="" className={'gif'} />
          <Link className="cta-link black" to={'/psychologists'}>
            Зареєструватися
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TherapistsCTA;
