import React from 'react';
import './BonusesPage.scss';
import { Link } from 'react-router';
import { useGetPromoCodes } from '../../../../shared/hooks/api.js';
import NoDataMessage from '../../../../shared/components/NoDataMessage.jsx';

const BonusesPage = () => {
  const { data: promoCodes, isLoading } = useGetPromoCodes();

  if (isLoading) return <p>Загрузка...</p>;

  const hasPromoCodes = promoCodes.length > 0;

  return (
    <div className="bonuses-page">
      <div className="bonuses-page__affiliate">
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
      </div>

      <div className="bonuses-page__form">
        <h3>Додайте промокод</h3>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            alert('NO. No promo code.');
          }}
        >
          <input type="text" placeholder="XXXXXXX" />
          <button>
            <img src="/src/assets/icons/bonuses/arrow.svg" alt="" />
          </button>
        </form>
      </div>

      <div>
        <h3>Застосовані промокоди</h3>

        {hasPromoCodes ? (
          <div className="bonuses-page__promocodes">
            {promoCodes.map((item) => (
              <div key={item.id} className="bonuses-page__promocodes--item">
                <h4>{item.title}</h4>
                <div>
                  <p>{item.description}</p>
                  <p>{item.cost}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <NoDataMessage place={'promo codes'} />
        )}
      </div>
    </div>
  );
};

export default BonusesPage;
