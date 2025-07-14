import React from 'react';
import './BonusesPage.scss';
import BonusesTemplate from '../../../../shared/components/bonuses/BonusesTemplate.jsx';

const BonusesPage = () => {
  return (
    <BonusesTemplate userType={'specialist'}>
      <div>
        <h3>Отримані нагороди</h3>

        <div className="specialist-bonuses">
          <div className="specialist-bonuses__item">
            <div className="specialist-bonuses__item--header">
              <p className="bonuses-title">Статус</p>
              <p className="bonuses-description">
                нагорода за 100 успішних сесій
              </p>
            </div>

            <div className="specialist-bonuses__item--recommended">
              <img src="/assets/icons/search/star.svg" alt="" />
              <p>Рекомендуємо</p>
            </div>
          </div>

          <div className="specialist-bonuses__item">
            <div className="specialist-bonuses__item--header">
              <p className="bonuses-title">Бонус 200</p>
              <p className="bonuses-description">
                нагорода за 500 успішних сесій
              </p>
            </div>

            <div className="specialist-bonuses__item--cost">
              <p className="bonuses-cost-desc">Отримано на рахунок</p>
              <p className="bonuses-cost">200 €</p>
            </div>
          </div>

          <div className="specialist-bonuses__item">
            <div className="specialist-bonuses__item--header">
              <p className="bonuses-title">Бонус 500</p>
              <p className="bonuses-description">
                нагорода за 1000 успішних сесій
              </p>
            </div>

            <div className="specialist-bonuses__item--cost">
              <p className="bonuses-cost-desc">Отримано на рахунок</p>
              <p className="bonuses-cost">500 €</p>
            </div>
          </div>

          <div className="specialist-bonuses__item">
            <div className="specialist-bonuses__item--header">
              <p className="bonuses-title">Бонус 1000</p>
              <p className="bonuses-description">
                нагорода за 3000 успішних сесій
              </p>
            </div>

            <div className="specialist-bonuses__item--cost">
              <p className="bonuses-cost-desc">Отримано на рахунок</p>
              <p className="bonuses-cost">1000 €</p>
            </div>
          </div>
        </div>
      </div>
    </BonusesTemplate>
  );
};

export default BonusesPage;
