const listMessagesByUserId = {
  0: [
    {
      id: 1,
      avatar: '/assets/messages/danilo.jpg',
      name: 'Данило',
      message: 'Вітаю, чи можу я чимось допомогти?',
      date: '19.02',
      time: '15:30',
      count: 1,
    },
    {
      id: 2,
      avatar: '/assets/messages/ludmila.jpg',
      name: 'Людмила',
      message:
        'Вітаю. Дякую за увагу до мого профілю) Мене звати Людмила, спеціаліст до якого',
      date: '08.02',
      time: '16:00',
      count: 0,
    },
    {
      id: 3,
      avatar: '/assets/messages/julia.jpg',
      name: 'Юлія',
      message:
        'Вітаю! Скажіть будь ласка, чи можу я допомогти вам знайти вільний час для',
      date: '07.02',
      time: '18:00',
      count: 2,
    },
    {
      id: 4,
      avatar: '/assets/messages/irina.jpg',
      name: 'Ірина',
      message:
        'Добрий день! Дякую за увагу до мого профілю. Скажіть будь ласка, який у вас',
      date: '07.02',
      time: '09:10',
      count: 0,
    },
  ],
  1: [
    {
      id: 5,
      avatar: '/assets/messages/oleksandr.jpg',
      name: 'Олександр Немцов',
      message: 'Чи можу я зараз потрапити на сеанс?',
      date: '19.02',
      time: '15:30',
      count: 2,
    },
    {
      id: 6,
      avatar: '/assets/messages/julia-prihodko.jpg',
      name: 'Юлія Приходько',
      message:
        'Вітаю. Дуже подобається ваш профіль) Мене звати Юлія хочу пропрацювати',
      date: '08.02',
      time: '16:00',
      count: 0,
    },
    {
      id: 7,
      avatar: '/assets/messages/ludmila-yasko.jpg',
      name: 'Людмила Ясько',
      message:
        'Скажіть будь ласка, чи можу я з вами вирішити всі свої сімейні проблеми?',
      date: '07.02',
      time: '18:00',
      count: 3,
    },
    {
      id: 8,
      avatar: '/assets/messages/irina-sheludko.jpg',
      name: 'Ірина Шелудько',
      message:
        'Вітаю! Я вже забронювала сеанс до вас на понеділок і дуже чекаю зустрічі',
      date: '07.02',
      time: '09:10',
      count: 0,
    },
  ],
};

export const getMessagesById = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listMessagesByUserId[userId]);
    }, 500); // задержку сделал типа с сервака, потом удалить
  });
};
