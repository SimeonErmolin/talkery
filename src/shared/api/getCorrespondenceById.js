export const getCorrespondenceById = async (id) => {
  const mockCorrespondence = [
    {
      id: 1,
      name: 'Данило',
      online: false,
      avatar: '/src/assets/messages/danilo.jpg',
      date: '19 лютого',
      messages: [
        {
          author: 'me',
          message: 'Вітаю, чи можу я чимось допомогти?',
        },
      ],
    },
    {
      id: 2,
      name: 'Людмила',
      online: true,
      avatar: '/src/assets/messages/ludmila.jpg',
      date: '8 лютого',
      messages: [
        {
          author: 'me',
          message: 'Вітаю, чи можу я чимось допомогти?',
        },
        {
          author: 'specialist',
          message:
            'Вітаю. Дякую за увагу до мого профілю) \n' +
            'Мене звати Людмила, спеціаліст до якого',
        },
      ],
    },
    {
      id: 3,
      name: 'Юлія',
      online: false,
      avatar: '/src/assets/messages/julia.jpg',
      date: '07 лютого',
      messages: [
        {
          author: 'me',
          message:
            'Олександр, вітаємо у чаті Talkery! 👋🏻\n' +
            'Тут ви можете поспілкуватися з фахівцем\n' +
            'а також забронювати до нього сесію.\n' +
            'Якщо у вас є питання, напишіть їх тут і\n' +
            'фахівець відповість вам якомога швидше.\n' +
            'Бажаємо вам гарно поспілкуватись! 🙏🏻',
        },
        {
          author: 'specialist',
          message:
            'Вітаю! Скажіть будь ласка, чи можу я\n' +
            'допомогти вам знайти вільний час\n' +
            'для запису до мене?',
        },
        {
          author: 'me',
          message:
            'Вітаю! Так, я з радістю запишусь до \n' +
            'вас на сесію. Скажіть о котрій годині\n' +
            'я можу сьогодні потрапити до вас?',
        },
      ],
    },
    {
      id: 4,
      name: 'Ірина',
      online: true,
      avatar: '/src/assets/messages/irina.jpg',
      date: '7 лютого',
      messages: [
        {
          author: 'specialist',
          message:
            'Добрий день! Дякую за увагу до мого \n' +
            'профілю. Скажіть будь ласка, який у вас',
        },
      ],
    },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const correspondence = mockCorrespondence.find((s) => s.id === id);
      if (correspondence) {
        resolve(correspondence);
      } else {
        reject(new Error('not found'));
      }
    }, 500); // задержку сделал типа с сервака, потом удалить
  });
};
