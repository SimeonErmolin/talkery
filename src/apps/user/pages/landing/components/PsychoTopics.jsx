import React, { useState } from 'react';
import { Link } from 'react-router';

const psychologists = [
  {
    name: 'Яна',
    experience: '9 років досвіду',
    price: '25 €',
    img: 'src/assets/landing/psychologists/psycho1.jpeg',
    link: '/psychologists/1',
  },
  {
    name: 'Яна',
    experience: '9 років досвіду',
    price: '25 €',
    img: 'src/assets/landing/psychologists/psycho2.jpeg',
    link: '/psychologists/1',
  },
  {
    name: 'Яна',
    experience: '9 років досвіду',
    price: '25 €',
    img: 'src/assets/landing/psychologists/psycho3.jpeg',
    link: '/psychologists/1',
  },
  {
    name: 'Яна',
    experience: '9 років досвіду',
    price: '25 €',
    img: 'src/assets/landing/psychologists/psycho4.jpeg',
    link: '/psychologists/1',
  },
  {
    name: 'Яна',
    experience: '9 років досвіду',
    price: '25 €',
    img: 'src/assets/landing/psychologists/psycho5.jpeg',
    link: '/psychologists/1',
  },
];

const topics = [
  'Дратівливість',
  'Панічні атаки',
  'Емоційне вигорання',
  'Депресивні стани',
  'Тривожні стани',
  'Самооцінка',
  'Навʼязливі думки та ритуали',
];

const PsychoTopics = () => {
  const [activeTopic, setActiveTopic] = useState('Дратівливість');

  return (
    <section className={'topics-section'}>
      <h2 className={'title'}>
        Допоможемо вам з <br className={'desktop-hide'} /> актуальними{' '}
        <span>темами</span>
      </h2>
      <ul className="topics-section__items">
        {topics.map((item, index) => (
          <li
            key={index}
            className={`topics-section__item ${activeTopic === item ? 'active' : ''}`}
            onClick={() => setActiveTopic(item)}
          >
            {item}
          </li>
        ))}
        <li className="topics-section__item other">+ 17 тем</li>
      </ul>
      <div className="slider">
        {psychologists.map((item, index) => (
          <Link
            key={index}
            className="slider__item"
            style={{
              backgroundImage: `url(${item.img})`,
            }}
            to={item.link}
          >
            <p className={'description'}>
              {item.name} <br />
              {item.experience} <br />
              {item.price}
            </p>
            <img
              src="/src/assets/icons/arrow-right.svg"
              alt=""
              className={'arrow'}
            />
          </Link>
        ))}
      </div>
      <Link className={'cta-link black'} to={'/psychologists'}>
        Підібрати фахівця
      </Link>
    </section>
  );
};

export default PsychoTopics;
