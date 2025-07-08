import React from 'react';
import { Link } from 'react-router';

const ProfessionalsBlock = () => {
  return (
    <section className={'professionals-section'}>
      <h2 className={'title'}>
        Працюємо тількі з <span>профі</span>
      </h2>
      <p className="desc">
        Понад 120 терапевтів готові <br className={'desktop-hide'} /> допомогти
        вам вже зараз
      </p>
      <div className="professionals-container">
        <img
          src="/src/assets/landing/professionals/avatars.png"
          alt=""
          className={'banner desktop-hide'}
        />

        <div className="professionals-container__items mobile-hide">
          <img
            src="/src/assets/landing/professionals/1psy.png.png"
            className="professionals-container__item"
            alt=""
          />
          <img
            src="/src/assets/landing/professionals/2psy.png.png"
            className="professionals-container__item"
            alt=""
          />
          <img
            src="/src/assets/landing/professionals/3psy.png.png"
            className="professionals-container__item"
            alt=""
          />
          <img
            src="/src/assets/landing/professionals/4psy.png.png"
            className="professionals-container__item"
            alt=""
          />
          <img
            src="/src/assets/landing/professionals/5psy.png.png"
            className="professionals-container__item"
            alt=""
          />
          <img
            src="/src/assets/landing/professionals/6psy.png.png"
            className="professionals-container__item"
            alt=""
          />
          <img
            src="/src/assets/landing/professionals/7psy.png.png"
            className="professionals-container__item"
            alt=""
          />
          <img
            src="/src/assets/landing/professionals/8psy.png.png"
            className="professionals-container__item"
            alt=""
          />
        </div>

        <Link className="cta-link black" to={'psychologists'}>
          Підібрати фахівця
        </Link>
      </div>
    </section>
  );
};

export default ProfessionalsBlock;
