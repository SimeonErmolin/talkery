import React from 'react';

const Requirements = () => {
  return (
    <section className={'requirements'}>
      <h2 className="title">
        Вимоги до <span>терапевтів</span>
      </h2>
      <ul className={'requirements__items'}>
        <li className={'requirements__item'}>
          <img src="/src/assets/gif/education.gif" alt="" className="gif" />
          <p className="desc">
            Педагогічна, медична <br className={'mobile-hide'} /> або
            соціологічна
          </p>
          <div className="category">Вища освіта</div>
          <p className="desc">
            Педагогічна, медична <br className={'mobile-hide'} /> або
            соціологічна
          </p>
        </li>
        <li className={'requirements__item'}>
          <img src="/src/assets/gif/work.gif" alt="" className="gif" />
          <p className="desc">
            Приватна практика та <br className={'mobile-hide'} /> участь у
            супервізіях
          </p>
          <div className="category">Досвід роботи від 2 років</div>
          <p className="desc">
            Приватна практика та <br className={'mobile-hide'} /> участь у
            супервізіях
          </p>
        </li>
        <li className={'requirements__item'}>
          <img src="/src/assets/gif/writing.gif" alt="" className="gif" />
          <p className="desc">
            Від 400 загальних годин <br className={'mobile-hide'} /> в одному
            напрямку
          </p>
          <div className="category">Сертифікація у вашій методиці</div>
          <p className="desc">
            Від 400 загальних годин <br className={'mobile-hide'} /> в одному
            напрямку
          </p>
        </li>
        <li className={'requirements__item'}>
          <img src="/src/assets/gif/money.gif" alt="" className="gif" />
          <p className="desc">
            Платіжний метод що <br className={'mobile-hide'} /> працює у вашій
            країні
          </p>
          <div className="category">Дійсний спосіб виплат</div>
          <p className="desc">
            Платіжний метод що <br className={'mobile-hide'} /> працює у вашій
            країні
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Requirements;
