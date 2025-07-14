import React from 'react';
import './BonusesTemplate.scss';
import { Link } from 'react-router';

const BonusesTemplate = ({ userType, children }) => {
  return (
    <div className="bonuses-page">
      <div className="bonuses-page__affiliate">
        {userType === 'client' ? (
          <Link to={'/affiliate'}>
            <img src="/src/assets/icons/bonuses/ticket.svg" alt="" />
            <div>
              <h4>Запросіть друзів до Talkery</h4>
              <pre>
                <p>
                  {'Поділіться 50% знижкою та\n' +
                    'отримайте 10€ на свій рахунок'}
                </p>
              </pre>
            </div>
          </Link>
        ) : (
          <a>
            <img
              src="/src/assets/icons/bonuses/gift.svg"
              className="specialist-gift-img"
              alt=""
            />
            <div>
              <h4>Отримайте 200 € на рахунок</h4>
              <pre>
                <p>
                  {'Проводьте 500 успішних сесій\n' +
                    'та отримуйте наш супер бонус'}
                </p>
              </pre>
            </div>
          </a>
        )}
      </div>

      {children}
    </div>
  );
};

export default BonusesTemplate;
