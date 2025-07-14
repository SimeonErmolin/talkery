const listSchedulesById = {
  0: {
    sessions: [
      {
        date: '3 березня, Ср',
        avatar: '/assets/mockPhotos/Katerina.jpeg',
        name: 'Катерина Іваненко',
        role: 'Психолог, Психотерапевт',
        time: '11:00 - 12:00',
        session: 'онлайн',
        status: 'available',
      },
      {
        date: '5 березня, Пт',
        avatar: '/assets/mockPhotos/Katerina.jpeg',
        name: 'Катерина Іваненко',
        role: 'Психолог, Психотерапевт',
        time: '11:00 - 12:00',
        session: 'онлайн',
        status: 'notAvailable',
      },
    ],
    specialists: [
      {
        avatar: '/assets/mockPhotos/Katerina.jpeg',
        name: 'Катерина Іваненко',
        role: 'Психолог, Психотерапевт',
        cost: '20€',
        experience: '228 сесій',
        rating: '8 відгуків',
        status: 'reserve',
      },
      {
        avatar: '/assets/mockPhotos/Katerina.jpeg',
        name: 'Катерина Іваненко',
        role: 'Психолог, Психотерапевт',
        cost: '20€',
        experience: '228 сесій',
        rating: '8 відгуків',
        status: 'reserve',
      },
      {
        avatar: '/assets/mockPhotos/Katerina.jpeg',
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
        avatar: '/assets/mockPhotos/Katerina.jpeg',
        name: 'Катерина Іваненко',
        role: 'Психолог, Психотерапевт',
        time: '11:00 - 12:00',
        result: 'Успішно',
        status: 'passed',
      },
      {
        date: '28 січня, Вт',
        avatar: '/assets/mockPhotos/Katerina.jpeg',
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
        avatar: '/assets/mockPhotos/Katerina.jpeg',
        name: 'Катерина Іваненко',
        role: 'Психолог, Психотерапевт',
        time: '11:00 - 12:00',
        result: 'Скасовано',
        status: 'cancelled',
      },
      {
        date: '24 січня, Ср',
        avatar: '/assets/mockPhotos/Katerina.jpeg',
        name: 'Катерина Іваненко',
        role: 'Психолог, Психотерапевт',
        time: '11:00 - 12:00',
        result: 'Скасовано',
        status: 'cancelled',
      },
    ],
  },
  1: {
    sessions: [
      {
        date: '1 березня, Сб',
        avatar: '/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        time: '14:00 - 15:00',
        status: 'available',
      },
      {
        date: '1 березня, Сб',
        avatar: '/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        time: '14:00 - 15:00',
        status: 'notAvailable',
      },
    ],
    passed: [
      {
        date: '1 березня, Сб',
        avatar: '/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        time: '14:00 - 15:00',
        result: 'Успішно',
        status: 'passed',
      },
      {
        date: '1 березня, Сб',
        avatar: '/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        time: '14:00 - 15:00',
        result: 'Успішно',
        status: 'passed',
      },
      {
        date: '1 березня, Сб',
        avatar: '/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        time: '14:00 - 15:00',
        result: 'Успішно',
        status: 'passed',
      },
    ],
    canceled: [
      {
        date: '1 березня, Сб',
        avatar: '/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        time: '14:00 - 15:00',
        result: 'Скасовано',
        status: 'cancelled',
      },
      {
        date: '1 березня, Сб',
        avatar: '/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        time: '14:00 - 15:00',
        result: 'Скасовано',
        status: 'cancelled',
      },
      {
        date: '1 березня, Сб',
        avatar: '/assets/messages/julia-prihodko.jpg',
        name: 'Юлія Приходько',
        time: '14:00 - 15:00',
        result: 'Скасовано',
        status: 'cancelled',
      },
    ],
  },
};

export const getScheduleById = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listSchedulesById[userId]);
    }, 500); // задержку сделал типа с сервака, потом удалить
  });
};
