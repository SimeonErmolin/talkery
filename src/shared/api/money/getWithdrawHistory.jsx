export const getWithdrawHistory = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        customerPayments: [
          {
            id: 1,
            specialist: {
              avatar: '/assets/mockPhotos/Katerina.jpeg',
              name: 'Юлія Приходько',
            },
            info: {
              date: '05.03.2025',
              cost: '20€',
              fees: '5€',
              total: '15€',
            },
          },
          {
            id: 2,
            specialist: {
              avatar: '/assets/mockPhotos/Katerina.jpeg',
              name: 'Юлія Приходько',
            },
            info: {
              date: '05.03.2025',
              cost: '20€',
              fees: '5€',
              total: '15€',
            },
          },
          {
            id: 3,
            specialist: {
              avatar: '/assets/mockPhotos/Katerina.jpeg',
              name: 'Юлія Приходько',
            },
            info: {
              date: '05.03.2025',
              cost: '20€',
              fees: '5€',
              total: '15€',
            },
          },
          {
            id: 4,
            specialist: {
              avatar: '/assets/mockPhotos/Katerina.jpeg',
              name: 'Юлія Приходько',
            },
            info: {
              date: '05.03.2025',
              cost: '20€',
              fees: '5€',
              total: '15€',
            },
          },
          {
            id: 5,
            specialist: {
              avatar: '/assets/mockPhotos/Katerina.jpeg',
              name: 'Юлія Приходько',
            },
            info: {
              date: '05.03.2025',
              cost: '20€',
              fees: '5€',
              total: '15€',
            },
          },
          {
            id: 6,
            specialist: {
              avatar: '/assets/mockPhotos/Katerina.jpeg',
              name: 'Юлія Приходько',
            },
            info: {
              date: '05.03.2025',
              cost: '20€',
              fees: '5€',
              total: '15€',
            },
          },
          {
            id: 7,
            specialist: {
              avatar: '/assets/mockPhotos/Katerina.jpeg',
              name: 'Юлія Приходько',
            },
            info: {
              date: '05.03.2025',
              cost: '20€',
              fees: '5€',
              total: '15€',
            },
          },
        ],
        payments: [
          {
            id: 1,
            method: 'crypto',
            info: {
              date: '05.03.2025',
              cost: '1265€',
            },
          },
          {
            id: 2,
            method: 'card',
            info: {
              date: '05.03.2025',
              cost: '860€',
            },
          },
          {
            id: 3,
            method: 'card',
            info: {
              date: '05.03.2025',
              cost: '1455€',
            },
          },
          {
            id: 4,
            method: 'crypto',
            info: {
              date: '05.03.2025',
              cost: '340€',
            },
          },
          {
            id: 5,
            method: 'crypto',
            info: {
              date: '05.03.2025',
              cost: '500€',
            },
          },
          {
            id: 6,
            method: 'crypto',
            info: {
              date: '05.03.2025',
              cost: '450€',
            },
          },
          {
            id: 7,
            method: 'card',
            info: {
              date: '05.03.2025',
              cost: '1690€',
            },
          },
          {
            id: 8,
            method: 'card',
            info: {
              date: '05.03.2025',
              cost: '2345€',
            },
          },
          {
            id: 9,
            method: 'crypto',
            info: {
              date: '05.03.2025',
              cost: '1265€',
            },
          },
        ],
      });
    }, 500); // задержку сделал типа с сервака, потом удалить
  });
};
