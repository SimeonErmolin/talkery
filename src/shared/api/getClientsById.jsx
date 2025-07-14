const listClientsByUserId = {
  1: {
    totalClients: '245',
    list: [
      {
        id: 1,
        avatar: '/src/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        age: '24 роки',
        cost: '100.00 €',
      },
      {
        id: 2,
        avatar: '/src/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        age: '24 роки',
        cost: '100.00 €',
      },
      {
        id: 3,
        avatar: '/src/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        age: '24 роки',
        cost: '100.00 €',
      },
      {
        id: 4,
        avatar: '/src/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        age: '24 роки',
        cost: '100.00 €',
      },
      {
        id: 5,
        avatar: '/src/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        age: '24 роки',
        cost: '100.00 €',
      },
      {
        id: 6,
        avatar: '/src/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        age: '24 роки',
        cost: '100.00 €',
      },
      {
        id: 7,
        avatar: '/src/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        age: '24 роки',
        cost: '100.00 €',
      },
    ],
  },
};

export const getClientsById = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listClientsByUserId[userId]);
    }, 500); // задержку сделал типа с сервака, потом удалить
  });
};
