import React from 'react';
import { Link } from 'react-router';

const HowToStart = () => {
  return (
    <section className={'how-to-start'}>
      <h2 className="title">
        Як почати <br className={'desktop-hide'} /> працювати з{' '}
        <span>Talkery</span>
      </h2>
      <img src="/src/assets/gif/box.gif" alt="" className="gif" />
      <ul className="how-to-start__items">
        <li className={'how-to-start__item'}>
          <img
            src="/src/assets/landing/HIW/num1.svg"
            alt=""
            className={'number'}
          />
          <div className="how-to-start__content">
            <h3>Заповніть коротку анкету</h3>
            <h4>
              В ній є загальні питання про ваш досвід роботи та вашу
              спеціалізацію
            </h4>
            <div className="time">
              <img src="/src/assets/icons/time.svg" alt="" />
              <span>10 хвилин</span>
            </div>
            <p className="desc">
              Анкети розглядаються поступово обов’язково надається зворотний
              зв’язок та запрошення на інтерв’ю тим фахівцям, які наразі
              відповідають вимогам платформи та нашої цільової аудиторії
            </p>
          </div>
        </li>
        <li className={'how-to-start__item'}>
          <img
            src="/src/assets/landing/HIW/num2.svg"
            alt=""
            className={'number'}
          />
          <div className="how-to-start__content">
            <h3>Пройдіть інтерв’ю</h3>
            <h4>
              Онлайн-зустріч тривалістю 30 хв, яка дасть нам змогу познайомитись
              ближче та задати один одному важливі питання щодо співпраці{' '}
            </h4>
            <div className="time">
              <img src="/src/assets/icons/time.svg" alt="" />
              <span>30 хвилин</span>
            </div>
          </div>
        </li>
        <li className={'how-to-start__item'}>
          <img
            src="/src/assets/landing/HIW/num3.svg"
            alt=""
            className={'number'}
          />
          <div className="how-to-start__content">
            <h3>Заповніть детальнішу анкету</h3>
            <h4>
              Вона допоможе нам краще оформити вашу персональну сторінку на
              нашій платформі та почати працювати з клієнтами{' '}
            </h4>
            <div className="time">
              <img src="/src/assets/icons/time.svg" alt="" />
              <span>30 хвилин</span>
            </div>
          </div>
        </li>
        <li className={'how-to-start__item'}>
          <img
            src="/src/assets/landing/HIW/num4.svg"
            alt=""
            className={'number'}
          />
          <div className="how-to-start__content">
            <h3>Почніть приймати клієнтів</h3>
            <h4>
              Після верифікації на нашій платформі ви одразу зможете отримувати
              нових клієнтів та працювати плануючи свій графік в особистому
              кабінеті з використанням наших інструментів для фахівців
            </h4>
            <div className="time">
              <img src="/src/assets/icons/time.svg" alt="" />
              <span>від 60 хвилин на день</span>
            </div>
          </div>
        </li>
      </ul>
      <Link className="cta-link black" to={''}>
        Почати співпрацю
      </Link>
    </section>
  );
};

export default HowToStart;
