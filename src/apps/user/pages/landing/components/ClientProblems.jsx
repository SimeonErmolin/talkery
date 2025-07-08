import React from 'react';
import { Link } from 'react-router';

const ClientProblems = () => {
  return (
    <section className={'client-problems'}>
      <h2 className="title">
        <span>96%</span> клієнтів вирішили <br className={'mobile-hide'} /> свої
        проблеми на <span>Talkery</span>
      </h2>
      <ul className={'client-problems__items'}>
        <li className={'client-problems__item'}>
          <h3 className={'problem-type'}>
            <img src="/src/assets/landing/problems/p1.svg" alt="" />
            Тривожність
          </h3>
          <p className="description">
            Сумніваюся в усьому і не можу зробити вибір
          </p>
          <Link className={'cta-link'} to={'psychologists'}>
            Підібрати фахівця
          </Link>
          <img src="/src/assets/gif/em1.gif" alt="" className={'gif'} />
        </li>
        <li className={'client-problems__item'}>
          <h3 className={'problem-type pink'}>
            <img src="/src/assets/landing/problems/p2.svg" alt="" />
            Стосунки
          </h3>
          <p className="description">Не можу побудувати здорові стосунки</p>
          <Link className={'cta-link'} to={'psychologists'}>
            Підібрати фахівця
          </Link>
          <img src="/src/assets/gif/em2.gif" alt="" className={'gif'} />
        </li>
        <li className={'client-problems__item'}>
          <h3 className={'problem-type blue'}>
            <img src="/src/assets/landing/problems/p3.svg" alt="" />
            Cтрес
          </h3>
          <p className="description">
            Не знаю, що робити, багато всього навалилося
          </p>
          <Link className={'cta-link'} to={'psychologists'}>
            Підібрати фахівця
          </Link>
          <img src="/src/assets/gif/em3.gif" alt="" className={'gif'} />
        </li>
        <li className={'client-problems__item'}>
          <h3 className={'problem-type gray'}>
            <img src="/src/assets/landing/problems/p4.svg" alt="" />
            Депресія
          </h3>
          <p className="description">
            Взагалі не відчуваю радості в житті, та немаю жодних бажань
          </p>
          <Link className={'cta-link'} to={'psychologists'}>
            Підібрати фахівця
          </Link>
          <img src="/src/assets/gif/em4.gif" alt="" className={'gif'} />
        </li>
        <li className={'client-problems__item'}>
          <h3 className={'problem-type'}>
            <img src="/src/assets/landing/problems/p5.svg" alt="" />
            Вигорання
          </h3>
          <p className="description">
            Працюю через силу колеги стали дратувати
          </p>
          <Link className={'cta-link'} to={'psychologists'}>
            Підібрати фахівця
          </Link>
          <img src="/src/assets/gif/em5.gif" alt="" className={'gif'} />
        </li>
        <li className={'client-problems__item'}>
          <h3 className={'problem-type blue'}>
            <img src="/src/assets/landing/problems/p6.svg" alt="" />
            Самооцінка
          </h3>
          <p className="description">Ніяк не можу полюбити себе</p>
          <Link className={'cta-link'} to={'psychologists'}>
            Підібрати фахівця
          </Link>
          <img src="/src/assets/gif/em6.gif" alt="" className={'gif'} />
        </li>
        <li className={'client-problems__item'}>
          <h3 className={'problem-type blue'}>
            <img src="/src/assets/landing/problems/p7.svg" alt="" />
            Мотивація
          </h3>
          <p className="description">Не можу позбутися прокрастинації</p>
          <Link className={'cta-link'} to={'psychologists'}>
            Підібрати фахівця
          </Link>
          <img src="/src/assets/gif/em7.gif" alt="" className={'gif'} />
        </li>
        <li className={'client-problems__item'}>
          <h3 className={'problem-type pink'}>
            <img src="/src/assets/landing/problems/p8.svg" alt="" />
            Секс
          </h3>
          <p className="description">
            Не можемо з партнером налагодити інтимне життя
          </p>
          <Link className={'cta-link'} to={'psychologists'}>
            Підібрати фахівця
          </Link>
          <img src="/src/assets/gif/em8.gif" alt="" className={'gif'} />
        </li>
        <li className={'client-problems__item'}>
          <h3 className={'problem-type gray'}>
            <img src="/src/assets/landing/problems/p9.svg" alt="" />
            Інше
          </h3>
          <p className="description">
            Мені погано, але я й гадки не маю, що зі мною
          </p>
          <Link className={'cta-link'} to={'psychologists'}>
            Підібрати фахівця
          </Link>
          <img src="/src/assets/gif/em9.gif" alt="" className={'gif'} />
        </li>
      </ul>
    </section>
  );
};

export default ClientProblems;
