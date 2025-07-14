import React from 'react';
import BonusesTemplate from '../../../../shared/components/bonuses/BonusesTemplate.jsx';
import { useGetPromoCodes } from '../../../../shared/api/api.js';
import NoDataMessage from '../../../../shared/components/NoDataMessage.jsx';

const BonusesPage = () => {
  const { data: promoCodes, isLoading } = useGetPromoCodes();

  if (isLoading) return <p>Загрузка...</p>;

  const hasPromoCodes = promoCodes.length > 0;

  return (
    <BonusesTemplate userType={'client'}>
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
            <img src="/assets/icons/bonuses/arrow.svg" alt="" />
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
    </BonusesTemplate>
  );
};

export default BonusesPage;
