import React from 'react';
import { Link } from 'react-router';

const HowItWorks = () => {
  return (
    <section className={'how-it-works'}>
      <h2 className={'title'}>
        Як працює <span>Talkery</span>
      </h2>
      <div className="how-it-works__container">
        <ul className={'how-it-works__items'}>
          <li className={'how-it-works__item'}>
            <img
              src="/src/assets/landing/HIW/num1.svg"
              alt=""
              className={'number'}
            />
            <h3>Оберіть психотерапевта</h3>
            <p>
              Заповніть просту анкету та отримайте персональний підбір
              терапевтів для досягнення ваших цілей
            </p>
            <img
              src="/src/assets/landing/HIW/HIW1.png"
              alt=""
              className={'banner'}
            />
          </li>
          <li className={'how-it-works__item'}>
            <img
              src="/src/assets/landing/HIW/num2.svg"
              alt=""
              className={'number'}
            />
            <h3>Розпочніть свою терапію</h3>
            <p>
              Зв'яжіться з терапевтом у будь- якому месенджері. Задайте питання
              та забронюйте зручний час для сесії
            </p>
            <img
              src="/src/assets/landing/HIW/HIW2.png"
              alt=""
              className={'banner'}
            />
          </li>
          <li className={'how-it-works__item'}>
            <img
              src="/src/assets/landing/HIW/num3.svg"
              alt=""
              className={'number'}
            />
            <h3>
              Відвідуйте <span className={'desktop-hide'}>сеанси</span>{' '}
              регулярно
            </h3>
            <p>
              Легко бронюйте та переносьте свої сеанси в особистому кабінеті
              платформи для більш зручного проходження терапії
            </p>
            <img
              src="/src/assets/landing/HIW/HIW3.png"
              alt=""
              className={'banner'}
            />
          </li>
        </ul>
        <Link className={'cta-link black'} to={'/psychologists'}>
          Підібрати фахівця
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
