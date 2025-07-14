import React, { useState } from 'react';

const MoneyTemplate = ({ userType, userBalance }) => {
  const [price, setPrice] = useState(userType === 'client' ? '100 €' : '500 €');

  return (
    <div>
      <h3 className="title">
        {userType === 'client' ? 'Попопнення рахунку' : 'Виведення коштів'}
      </h3>

      <div className="deposit-modal">
        <h4>
          {userType === 'client'
            ? 'Введіть суму поповнення'
            : 'Введіть суму виведення'}
        </h4>

        <p className="price-show">{price}</p>

        {userType === 'specialist' && (
          <p className="user-balance">Доступний баланс: {userBalance} € </p>
        )}

        <div className="choose-buttons">
          {userType === 'client' ? (
            <>
              <button
                className={`button price ${price === '20 €' ? 'price__active' : ''}`}
                onClick={() => setPrice('20 €')}
              >
                20 €
              </button>

              <button
                className={`button price ${price === '50 €' ? 'price__active' : ''}`}
                onClick={() => setPrice('50 €')}
              >
                50 €
              </button>

              <button
                className={`button price ${price === '100 €' ? 'price__active' : ''}`}
                onClick={() => setPrice('100 €')}
              >
                100 €
              </button>

              <button
                className={`button price ${price === '200 €' ? 'price__active' : ''}`}
                onClick={() => setPrice('200 €')}
              >
                200 €
              </button>

              <button
                className={`button price ${price === '300 €' ? 'price__active' : ''}`}
                onClick={() => setPrice('300 €')}
              >
                300 €
              </button>

              <button
                className={`button price ${price === '500 €' ? 'price__active' : ''}`}
                onClick={() => setPrice('500 €')}
              >
                500 €
              </button>
            </>
          ) : (
            <>
              <button
                className={`button price ${price === '200 €' ? 'price__active' : ''}`}
                onClick={() => setPrice('200 €')}
              >
                200 €
              </button>

              <button
                className={`button price ${price === '500 €' ? 'price__active' : ''}`}
                onClick={() => setPrice('500 €')}
              >
                500 €
              </button>

              <button
                className={`button price ${price === '1 000 €' ? 'price__active' : ''}`}
                onClick={() => setPrice('1 000 €')}
              >
                1 000 €
              </button>
            </>
          )}
        </div>

        <h4>
          {userType === 'client'
            ? 'Виберіть спосіб поповнення'
            : 'Виберіть рахунок для отримання'}
        </h4>

        <div className="select-deposit-method">
          <div className="select-deposit-method__item">
            <div>
              <img src="/assets/icons/user-profile/card.svg" alt="" />
              <p>
                {userType === 'client'
                  ? 'Банківська картка'
                  : 'Банківський рахунок'}
              </p>
            </div>

            <button>
              <img src="/assets/icons/user-profile/arrow.svg" alt="" />
            </button>
          </div>

          <div className="select-deposit-method__item">
            <div>
              <img src="/assets/icons/user-profile/crypto.svg" alt="" />
              <p>
                {userType === 'client'
                  ? 'Криптовалюта'
                  : 'Криптовалютний рахунок'}
              </p>
            </div>

            <button>
              <img src="/assets/icons/user-profile/arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="providers">
          <img
            src="/assets/icons/user-profile/stripe.png"
            alt=""
            className="stripe"
          />
          <div>
            <img
              src="/assets/icons/user-profile/cryptomus-logo.svg"
              alt=""
              className="cryptomus-logo"
            />
            <img
              src="/assets/icons/user-profile/cryptomus.svg"
              alt=""
              className="cryptomus"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyTemplate;
