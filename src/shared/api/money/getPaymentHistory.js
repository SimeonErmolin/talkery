export const getPaymentHistory = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        done: [
          {
            id: 1,
            specialist: {
              avatar: '/assets/mockPhotos/Katerina.jpeg',
              name: 'Катерина Іваненко',
              description: 'Психолог, Психотерапевт',
            },
            info: {
              date: '05.03.2025',
              cost: '20€',
            },
          },
          {
            id: 2,
            specialist: {
              avatar: '/assets/mockPhotos/Katerina.jpeg',
              name: 'Катерина Іваненко',
              description: 'Психолог, Психотерапевт',
            },
            info: {
              date: '05.03.2025',
              cost: '20€',
            },
          },
          {
            id: 3,
            specialist: {
              avatar: '/assets/mockPhotos/Katerina.jpeg',
              name: 'Катерина Іваненко',
              description: 'Психолог, Психотерапевт',
            },
            info: {
              date: '05.03.2025',
              cost: '20€',
            },
          },
          {
            id: 4,
            specialist: {
              avatar: '/assets/mockPhotos/Katerina.jpeg',
              name: 'Катерина Іваненко',
              description: 'Психолог, Психотерапевт',
            },
            info: {
              date: '05.03.2025',
              cost: '20€',
            },
          },
          {
            id: 5,
            specialist: {
              avatar: '/assets/mockPhotos/Katerina.jpeg',
              name: 'Катерина Іваненко',
              description: 'Психолог, Психотерапевт',
            },
            info: {
              date: '05.03.2025',
              cost: '20€',
            },
          },
          {
            id: 6,
            specialist: {
              avatar: '/assets/mockPhotos/Katerina.jpeg',
              name: 'Катерина Іваненко',
              description: 'Психолог, Психотерапевт',
            },
            info: {
              date: '05.03.2025',
              cost: '20€',
            },
          },
        ],
        cancelled: {},
        replenishment: [
          {
            id: 1,
            method: 'crypto',
            info: {
              date: '05.03.2025',
              cost: '20€',
            },
          },
          {
            id: 2,
            method: 'card',
            info: {
              date: '05.03.2025',
              cost: '20€',
            },
          },
          {
            id: 3,
            method: 'card',
            info: {
              date: '05.03.2025',
              cost: '20€',
            },
          },
          {
            id: 4,
            method: 'crypto',
            info: {
              date: '05.03.2025',
              cost: '20€',
            },
          },
          {
            id: 5,
            method: 'crypto',
            info: {
              date: '05.03.2025',
              cost: '20€',
            },
          },
          {
            id: 6,
            method: 'crypto',
            info: {
              date: '05.03.2025',
              cost: '20€',
            },
          },
          {
            id: 7,
            method: 'card',
            info: {
              date: '05.03.2025',
              cost: '20€',
            },
          },
          {
            id: 8,
            method: 'card',
            info: {
              date: '05.03.2025',
              cost: '20€',
            },
          },
        ],
      });
    }, 500); // задержку сделал типа с сервака, потом удалить
  });
};
