import React from 'react';
import { Link } from 'react-router';

const MobileMenu = ({ menuIsActive, closeMenu }) => {
  return (
    <div className={`mobile-menu ${menuIsActive ? 'active' : ''}`}>
      <ul className="mobile-menu__header">
        <li className="mobile-menu__header__item">
          <img src="/src/assets/language/ua.png" alt="" className={'flag'} />
          UA
        </li>
        <li className="mobile-menu__header__item online ">Онлайн підтримка</li>
        <li className="mobile-menu__header__item">FAQ</li>
        <button className={'close'} onClick={closeMenu}>
          <img src="/src/assets/icons/close.svg" alt="" />
        </button>
      </ul>
      <div className="mobile-menu__content">
        <Link
          className="mobile-menu__content__item"
          to={'/landing-for-therapists'}
        >
          Фахівцям
        </Link>
        <Link className="mobile-menu__content__item" to={'/esoteric'}>
          Езотерика
          <span className="tag new">новинка</span>
        </Link>
        <Link className="mobile-menu__content__item" to={'/events'}>
          Івенти
        </Link>
        <Link className="mobile-menu__content__item" to={'/'}>
          Магазин
          <span className="tag soon">скоро</span>
        </Link>
        <Link className="mobile-menu__content__item" to={'/gift-cards'}>
          Подарункові картки
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
