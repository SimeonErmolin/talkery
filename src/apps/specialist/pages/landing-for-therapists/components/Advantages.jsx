import React from 'react';

const Advantages = () => {
  return (
    <section className={'advantages-section'}>
      <h2 className="title">
        Що ви <span>отримуєте</span>
      </h2>
      <ul className={'advantages-section__items'}>
        <li className="advantages-section__item">
          <h2 className="category">Клієнтів</h2>
          <p className="description">
            Активуйте свій профіль та отримуйте нових клієнтів. Обирайте
            замовлення з якими зможете допомогти клієнтам та отримати для себе
            найкращий досвід.
          </p>
          <p className="description">
            Керуйте активністю свого профіля коли забажаєте, через особистий
            кабінет.
          </p>
        </li>
        <li className="advantages-section__item">
          <h2 className="category">Особистий бренд</h2>
          <p className="description">
            Отримайте власну лендінг сторінку на нашій платформі без клопоту на
            розробку.
          </p>
          <p className="description">
            За бажанням беріть участь у записі відео подкастів та статей, а ми
            зробимо так щоб вашу інформацію точно почули.
          </p>
        </li>
        <li className="advantages-section__item">
          <h2 className="category">Підтримку</h2>
          <p className="description">
            Ми з вами саме тоді, коли вам це потрібно!
          </p>
          <p className="description">
            Допомагаємо вирішити будь-які питання будь то допомога з оформленням
            вашого профілю, або інша технічна підтримка.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Advantages;
