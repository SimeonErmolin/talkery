export const getSchedule = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        sessions: [
          {
            date: '3 березня, Ср',
            avatar: '/src/assets/mockPhotos/Katerina.jpeg',
            name: 'Катерина Іваненко',
            role: 'Психолог, Психотерапевт',
            time: '11:00 - 12:00',
            session: 'онлайн',
            status: 'available',
          },
          {
            date: '5 березня, Пт',
            avatar: '/src/assets/mockPhotos/Katerina.jpeg',
            name: 'Катерина Іваненко',
            role: 'Психолог, Психотерапевт',
            time: '11:00 - 12:00',
            session: 'онлайн',
            status: 'notAvailable',
          },
        ],
        specialists: [
          {
            avatar: '/src/assets/mockPhotos/Katerina.jpeg',
            name: 'Катерина Іваненко',
            role: 'Психолог, Психотерапевт',
            cost: '20€',
            experience: '228 сесій',
            rating: '8 відгуків',
            status: 'reserve',
          },
          {
            avatar: '/src/assets/mockPhotos/Katerina.jpeg',
            name: 'Катерина Іваненко',
            role: 'Психолог, Психотерапевт',
            cost: '20€',
            experience: '228 сесій',
            rating: '8 відгуків',
            status: 'reserve',
          },
          {
            avatar: '/src/assets/mockPhotos/Katerina.jpeg',
            name: 'Катерина Іваненко',
            role: 'Психолог, Психотерапевт',
            cost: '20€',
            experience: '228 сесій',
            rating: '8 відгуків',
            status: 'reserve',
          },
        ],
        passed: [
          {
            date: '13 лютого, Чт',
            avatar: '/src/assets/mockPhotos/Katerina.jpeg',
            name: 'Катерина Іваненко',
            role: 'Психолог, Психотерапевт',
            time: '11:00 - 12:00',
            result: 'Успішно',
            status: 'passed',
          },
          {
            date: '28 січня, Вт',
            avatar: '/src/assets/mockPhotos/Katerina.jpeg',
            name: 'Катерина Іваненко',
            role: 'Психолог, Психотерапевт',
            time: '11:00 - 12:00',
            result: 'Успішно',
            status: 'passed',
          },
        ],
        canceled: [
          {
            date: '15 лютого, Пт',
            avatar: '/src/assets/mockPhotos/Katerina.jpeg',
            name: 'Катерина Іваненко',
            role: 'Психолог, Психотерапевт',
            time: '11:00 - 12:00',
            result: 'Скасовано',
            status: 'cancelled',
          },
          {
            date: '24 січня, Ср',
            avatar: '/src/assets/mockPhotos/Katerina.jpeg',
            name: 'Катерина Іваненко',
            role: 'Психолог, Психотерапевт',
            time: '11:00 - 12:00',
            result: 'Скасовано',
            status: 'cancelled',
          },
        ],
      });
    }, 500); // задержку сделал типа с сервака, потом удалить
  });
};
