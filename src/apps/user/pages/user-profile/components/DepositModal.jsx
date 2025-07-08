import React, { useState } from 'react';

const DepositModal = () => {
  const [price, setPrice] = useState('100 €');

  return (
    <div>
      <h3 className="title">Попопнення рахунку</h3>

      <div className="deposit-modal">
        <h4>Введіть суму поповнення</h4>
        <p className="price-show">{price}</p>

        <div className="choose-buttons">
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
        </div>

        <h4>Виберіть спосіб поповнення</h4>

        <div className="select-deposit-method">
          <div className="select-deposit-method__item">
            <div>
              <img src="/src/assets/icons/user-profile/card.svg" alt="" />
              <p>Банківська картка</p>
            </div>

            <button>
              <img src="/src/assets/icons/user-profile/arrow.svg" alt="" />
            </button>
          </div>

          <div className="select-deposit-method__item">
            <div>
              <img src="/src/assets/icons/user-profile/crypto.svg" alt="" />
              <p>Криптовалюта</p>
            </div>

            <button>
              <img src="/src/assets/icons/user-profile/arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="providers">
          <img
            src="/src/assets/icons/user-profile/stripe.png"
            alt=""
            className="stripe"
          />
          <div>
            <img
              src="/src/assets/icons/user-profile/cryptomus-logo.svg"
              alt=""
              className="cryptomus-logo"
            />
            <img
              src="/src/assets/icons/user-profile/cryptomus.svg"
              alt=""
              className="cryptomus"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositModal;
