import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className={'footer'}>
      <img src="/src/assets/logo/talkery.png" alt="" className={'logo'} />
      <p>perfect mental health</p>
      <div className="partners">
        <img src="/src/assets/logo/angelone.svg" alt="" />
        <img src="/src/assets/logo/GDPR.svg" alt="" />
      </div>
      <div className="payments">
        <div className="payments__item">
          <img src="/src/assets/logo/visa.svg" alt="" />
        </div>
        <div className="payments__item">
          <img src="/src/assets/logo/apple-pay.svg" alt="" />
        </div>
        <div className="payments__item">
          <img src="/src/assets/logo/google-pay.svg" alt="" />
        </div>
        <div className="payments__item">
          <img src="/src/assets/logo/mastercard.svg" alt="" />
        </div>
      </div>
      <div className="legal">
        <Link to={'/policy'}>Політика конфіденційності</Link>
        <Link to={'/rules'}>Правила користування сайтом</Link>
      </div>
      <div className="copyright">© 2024-2025 Talkery</div>
    </footer>
  );
};

export default Footer;
