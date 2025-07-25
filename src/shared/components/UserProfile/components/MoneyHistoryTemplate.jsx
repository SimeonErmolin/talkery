import React, { useState } from 'react';
import {
  useGetPaymentHistory,
  useGetWithdrawHistory,
} from '../../../api/api.js';
import Tabs from '../../SelectTabs/Tabs.jsx';
import NoDataMessage from '../../NoDataMessage.jsx';

const ClientTabs = [
  { key: 'done', label: 'Успішні' },
  { key: 'cancelled', label: 'Скасовані' },
  { key: 'replenishment', label: 'Поповнення' },
];

const SpecialistTabs = [
  { key: 'customerPayments', label: 'Оплати клієнтів' },
  { key: 'payments', label: 'Виплати' },
];

const MoneyHistoryTemplate = ({ userType }) => {
  const [activeTab, setActiveTab] = useState(
    userType === 'client' ? 'done' : 'customerPayments'
  );
  const { data: paymentHistoryData, isLoadingP } = useGetPaymentHistory();
  const { data: withdrawHistoryData, isLoadingW } = useGetWithdrawHistory();

  if (isLoadingP || isLoadingW) return <p>Загрузка...</p>;

  const {
    done = [],
    cancelled = [],
    replenishment = [],
  } = paymentHistoryData || {};
  const { customerPayments = [], payments = [] } = withdrawHistoryData || {};

  return (
    <div className="payment-history">
      <h3 className="title">Оплати</h3>

      <Tabs
        tabs={userType === 'client' ? ClientTabs : SpecialistTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === 'done' &&
        (done?.length > 0 ? (
          <div className="done">
            {done.map((item) => (
              <div key={item.id} className="done__item">
                <div className="done__item--specialist-info">
                  <img src={item.specialist.avatar} alt="" className="avatar" />

                  <div>
                    <p className="name">{item.specialist.name}</p>
                    <p className="description">{item.specialist.description}</p>
                  </div>
                </div>

                <div className="done__item--data">
                  <p className="date">{item.info.date}</p>
                  <p className="cost">{item.info.cost}</p>
                </div>
              </div>
            ))}

            <button className="button transparent">Завантажити ще</button>
          </div>
        ) : (
          <NoDataMessage place={'successful payments'} margin />
        ))}

      {activeTab === 'cancelled' &&
        (cancelled?.length > 0 ? (
          <>
            <div>cancelled</div>

            <button className="button transparent">Завантажити ще</button>
          </>
        ) : (
          <NoDataMessage place={'cancelled payments'} margin />
        ))}

      {activeTab === 'replenishment' &&
        (replenishment?.length > 0 ? (
          <div className="replenishment">
            {replenishment.map((item) => (
              <div key={item.id} className="replenishment__item">
                <div className="replenishment__item--method">
                  <img
                    src={
                      item.method === 'crypto'
                        ? '/assets/icons/user-profile/crypto.svg'
                        : '/assets/icons/user-profile/card.svg'
                    }
                    alt=""
                    className={item.method}
                  />
                  <p>
                    {item.method === 'crypto'
                      ? 'Криптовалюта'
                      : 'Банківська картка'}
                  </p>
                </div>

                <div className="replenishment__item--data">
                  <p className="date">{item.info.date}</p>
                  <p className="cost">{item.info.cost}</p>
                </div>
              </div>
            ))}

            <button className="button transparent">Завантажити ще</button>
          </div>
        ) : (
          <NoDataMessage place={'data on replenishment'} margin />
        ))}

      {activeTab === 'customerPayments' &&
        (customerPayments?.length > 0 ? (
          <div className="done">
            {customerPayments.map((item) => (
              <div key={item.id} className="done__item">
                <div className="done__item--specialist-info">
                  <img src={item.specialist.avatar} alt="" className="avatar" />

                  <div>
                    <p className="name">{item.specialist.name}</p>
                    <p className="description">{item.info.date}</p>
                  </div>
                </div>

                <div className="done__item--total-cost">
                  <p className="cost">{item.info.cost}</p>
                  <p className="cost fees">
                    {item.info.fees} <span>комісія</span>
                  </p>
                  <p className="cost">{item.info.total}</p>
                </div>
              </div>
            ))}

            <button className="button transparent">Завантажити ще</button>
          </div>
        ) : (
          <NoDataMessage place={'customerPayments'} margin />
        ))}

      {activeTab === 'payments' &&
        (payments?.length > 0 ? (
          <div className="replenishment">
            {payments.map((item) => (
              <div key={item.id} className="replenishment__item">
                <div className="replenishment__item--method">
                  <img
                    src={
                      item.method === 'crypto'
                        ? '/assets/icons/user-profile/crypto.svg'
                        : '/assets/icons/user-profile/card.svg'
                    }
                    alt=""
                    className={item.method}
                  />
                  <p>
                    {item.method === 'crypto'
                      ? 'Криптовалюта'
                      : 'Банківська картка'}
                  </p>
                </div>

                <div className="replenishment__item--data">
                  <p className="date">{item.info.date}</p>
                  <p className="cost">{item.info.cost}</p>
                </div>
              </div>
            ))}

            <button className="button transparent">Завантажити ще</button>
          </div>
        ) : (
          <NoDataMessage place={'data on payments'} margin />
        ))}
    </div>
  );
};

export default MoneyHistoryTemplate;
