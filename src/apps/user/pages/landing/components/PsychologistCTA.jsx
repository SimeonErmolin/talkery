import React from 'react';
import { Link } from 'react-router';

const PsychologistCta = () => {
  return (
    <section className={'top-banners'}>
      <div className={'psychologist-cta'}>
        <h1>
          Підберіть психолога <br className={'mobile-hide'} /> який вас зрозуміє{' '}
          <span className={'smile'}>☺️</span>
        </h1>
        <img src="/src/assets/gif/duck1.gif" alt="" className={'gif'} />
        <h2>Почніть сесію сьогодні від €20</h2>
        <div className="cta-buttons">
          <Link className="cta-link black" to={'/quiz'}>
            Підібрати фахівця
          </Link>
          <Link className="cta-link" to={'/search'}>
            Усі фахівці
          </Link>
        </div>
        <div className="verified-psychologists">
          <img src="/src/assets/icons/verified.svg" alt="" />
          <p>Тільки досконало перевірені фахівці</p>
        </div>
      </div>
      <div className="secondary-container">
        <div className={'psychologist-cta secondary'}>
          <h1>Я клієнт</h1>
          <img src="/src/assets/gif/duck2.gif" alt="" className={'gif'} />
          <Link className="cta-link black" to={'/psychologists'}>
            Зареєструватися
          </Link>
        </div>
        <div className={'psychologist-cta secondary'}>
          <h1>Я фахівець</h1>
          <img src="/src/assets/gif/duck3.gif" alt="" className={'gif'} />
          <Link className="cta-link black" to={'/psychologists'}>
            Зареєструватися
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PsychologistCta;
