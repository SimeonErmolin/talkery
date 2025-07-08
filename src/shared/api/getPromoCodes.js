export const getPromoCodes = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'SIGNUP5BONUS',
          description: 'Отримано на рахунок',
          cost: '5 €',
        },
        {
          id: 2,
          title: 'GIFT1000GHTYVM',
          description: 'Отримано на рахунок',
          cost: '1000 €',
        },
      ]);
    }, 500); // задержку сделал типа с сервака, потом удалить
  });
};
