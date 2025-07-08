import React, { useState } from 'react';
import { useGetPaymentHistory } from '../../../../../shared/hooks/api.js';
import Tabs from '../../../../../shared/components/SelectTabs/Tabs.jsx';
import NoDataMessage from '../../../../../shared/components/NoDataMessage.jsx';

const tabs = [
  { key: 'done', label: 'Успішні' },
  { key: 'cancelled', label: 'Скасовані' },
  { key: 'replenishment', label: 'Поповнення' },
];

const PaymentHistoryModal = () => {
  const [activeTab, setActiveTab] = useState('done');
  const { data: paymentHistoryData, isLoading } = useGetPaymentHistory();

  if (isLoading) return <p>Загрузка...</p>;

  const { done, cancelled, replenishment } = paymentHistoryData;

  return (
    <div className="payment-history">
      <h3 className="title">Оплати</h3>

      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

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
                        ? '/src/assets/icons/user-profile/crypto.svg'
                        : '/src/assets/icons/user-profile/card.svg'
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
    </div>
  );
};

export default PaymentHistoryModal;
