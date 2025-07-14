import React from 'react';

const notFoundMessage = {
  sessions: 'Немає заброньованих сеансів',
  passed: 'Немає минулих сеансів',
  canceled: 'Немає скасованих сеансів',
  specialists: 'Немає даних про фахівців',
  chats: 'Немає чатів',
  reviews: 'Немає відгуків',
  'promo codes': 'Немає промокодів',
  'successful payments': 'Немає успішних платежів',
  'cancelled payments': 'Немає скасованих платежів',
  'data on replenishment': 'Немає даних про поповнення',
  customerPayments: 'Немає платежів',
  'data on payments': 'Немає виплат',
  'data on clients': 'Немає клієнтів',
};

const NoDataMessage = ({ place, margin }) => {
  return (
    <div className={`no-data ${margin && 'no-data__chat'}`}>
      <img src="/assets/icons/no-data-find/clock.svg" alt="" />
      <p>{notFoundMessage[place]}</p>
    </div>
  );
};

export default NoDataMessage;
