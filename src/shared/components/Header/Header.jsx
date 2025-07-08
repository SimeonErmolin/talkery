import React, { useState, useEffect, useCallback } from 'react';
import DesktopContent from './DesktopContent.jsx';
import { Link } from 'react-router';

const SCROLL_HIDE_DELAY = 200;

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector('.header-wrapper');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      setIsFixed(false);
      setIsVisible(true);
    } else if (
      currentScrollY < lastScrollY &&
      currentScrollY > SCROLL_HIDE_DELAY
    ) {
      setIsFixed(true);
      setIsVisible(true);
    } else if (currentScrollY > SCROLL_HIDE_DELAY) {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    const scrollHandler = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [handleScroll]);

  return (
    <>
      <div style={{ height: isFixed ? `${headerHeight}px` : '0px' }}></div>
      <div
        className={`header-wrapper ${isFixed ? 'fixed' : ''} ${isVisible ? 'visible' : 'hidden'}`}
      >
        <header className="header">
          <Link to="/" className="logo">
            <img src="/src/assets/logo/talkery.png" alt="Logo" />
          </Link>
          <Link className="note" to="/note">
            <img src="/src/assets/icons/note.svg" alt="Note" />
          </Link>
          <DesktopContent isLogged={true} />
          <Link className="user-wrapper" to="/user-profile">
            <img
              src="/src/assets/icons/user-avatar.svg"
              alt="User Avatar"
              className="avatar"
            />
            <span>Кабінет</span>
          </Link>
        </header>
      </div>
    </>
  );
};

export default Header;
