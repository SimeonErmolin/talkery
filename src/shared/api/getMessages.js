export const getMessages = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          avatar: '/src/assets/messages/danilo.jpg',
          name: 'Данило',
          message: 'Вітаю, чи можу я чимось допомогти?',
          date: '19.02',
          time: '15:30',
          count: 1,
        },
        {
          id: 2,
          avatar: '/src/assets/messages/ludmila.jpg',
          name: 'Людмила',
          message:
            'Вітаю. Дякую за увагу до мого профілю) \n' +
            'Мене звати Людмила, спеціаліст до якого',
          date: '08.02',
          time: '16:00',
          count: 0,
        },
        {
          id: 3,
          avatar: '/src/assets/messages/julia.jpg',
          name: 'Юлія',
          message:
            'Вітаю! Скажіть будь ласка, чи можу я \n' +
            'допомогти вам знайти вільний час для',
          date: '07.02',
          time: '18:00',
          count: 2,
        },
        {
          id: 4,
          avatar: '/src/assets/messages/irina.jpg',
          name: 'Ірина',
          message:
            'Добрий день! Дякую за увагу до мого \n' +
            'профілю. Скажіть будь ласка, який у вас',
          date: '07.02',
          time: '09:10',
          count: 0,
        },
      ]);
    }, 500); // задержку сделал типа с сервака, потом удалить
  });
};
