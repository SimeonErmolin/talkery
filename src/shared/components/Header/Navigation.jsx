import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <nav className={'desktop-navigation'}>
      <Link className="desktop-navigation__item" to={'/landing-for-therapists'}>
        Фахівцям
      </Link>
      <Link className="desktop-navigation__item new" to={'/esoteric'}>
        Езотерика
        <span className="tag new">новинка</span>
      </Link>
      <Link className="desktop-navigation__item" to={'/events'}>
        Івенти
      </Link>
      <Link className="desktop-navigation__item" to={'/'}>
        Магазин
        <span className="tag soon">скоро</span>
      </Link>
      <Link className="desktop-navigation__item" to={'/gift-cards'}>
        Подарункові картки
      </Link>
      <Link className="desktop-navigation__item" to={'/faq'}>
        FAQ
      </Link>
    </nav>
  );
};

export default Navigation;
