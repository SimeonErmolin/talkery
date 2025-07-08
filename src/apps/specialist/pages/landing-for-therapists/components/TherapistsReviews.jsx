import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { renderTextWithBR } from '../../../../../shared/utils/helpers.jsx';

const reviews = [
  {
    name: 'Наталія Зайцева',
    avatar: 'src/assets/landing/therapists/therapist3.png',
    stars: 5,
    text: [
      'Маю лише гарні емоції від співпраці! А також величезне дякую від колег, які зареєстровані за моєю рекомендацією)',
      'Дуже зрозуміла анкета як на мене, можна вписати головне, що хотілося запропонувати новому клієнту 🙌',
      'Неймовірно зручно, що автоматизоване створення чатів та проведення оплати. Спеціаліста це розвантажує, коли дуже велика зайнятість. Тож це класно! 👍',
      'Я не знаю, де ви знайшли людей, що рекламують платформу, але вони круті! Завдяки нашій співпраці, я розширила свою клієнтську базу більш ніж втричі 🔥',
      'Бажаю процвітання сервісу! 🎉 <br /> Сподіваюсь ще на довгу співпрацю 😉',
    ],
  },
  {
    name: 'Дар’я Харченко',
    avatar: 'src/assets/landing/therapists/therapist2.png',
    stars: 5,
    text: [
      "Talkery серед інших платформ сподобалася мені зручним для клієнта інтерфейсом, швидким зворотним зв'язком та приємним дизайном. Як фахівець я можу відзначити оперативну роботу платформи у разі технічних неполадок, повну підтримку клієнта та, що особливо важливо, надання великої кількості способів оплати для клієнта, кожен із яких супроводжується чеком за надану послугу. Окремо вдячна за внесок у професійний імідж, якість наданих послуг гарантується ретельним відбором фахівців.",
      'Я ціную те, наскільки професійно менеджерка вирішує питання в чаті, використовуючи коректні та грамотні формулювання.',
      'Особливо я ціную нагадування про фіксацію зустрічей з клієнтами в особисті повідомлення та канал новин, в якому я можу дізнатися про важливі зміни на платформі.',
      'Платформа Talkery для мене як колега, яка завжди нагадує про зустрічі, оплати та ті формальні питання, на які я могла б не звернути увагу. Я рада бути частиною Talkery і з упевненістю можу рекомендувати її колегам - як молодим так і досвідченим фахівцям, робота з моїми клієнтами тепер чітко організована і більш комфортна.',
    ],
  },
  {
    name: 'Наталія Зайцева',
    avatar: 'src/assets/landing/therapists/therapist1.png',
    stars: 5,
    text: [
      'Я співпрацюю з платформою "Talkery" лише півроку, і увесь цей час думаю: "Де ж ви були раніше?!"',
      '· Дуже зрозуміла анкета, яка дозволяє себе презентувати; <br /> · Класно налагоджена комунікація менеджер-клієнт-терапевт; <br />  · Зручний планер для мне, як для психолога;',
      'Окрема подяка менеджеркам, які майже цілодобово на звʼязку і допомагають вирішувати багато організаційних питань, а також подобається прозора фінансова політика компанії.',
      'Дякую вам за можливість легко працювати в такі важкі часи!',
    ],
  },
];

const TherapistsReviews = () => {
  return (
    <section className={'therapists-reviews'}>
      <h2 className="title">
        Що терапевти <br className={'desktop-hide'} /> кажуть про{' '}
        <span>Talkery</span>
      </h2>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          1425: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination, Navigation]}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="therapists-reviews__items"
        spaceBetween={25}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="therapists-reviews__item">
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <img key={i} src="/src/assets/icons/star.svg" alt="" />
                ))}
              </div>
              {review.text.map((text, idx) => (
                <p key={idx} className="review-text">
                  {renderTextWithBR(text)}
                </p>
              ))}
              <div className="therapist-info">
                <img src={review.avatar} alt="" className="avatar" />
                <h3 className="name">{review.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-controls">
          <div className="swiper-button-prev" />
          <div className="swiper-pagination" />
          <div className="swiper-button-next" />
        </div>
      </Swiper>
      <Link className="cta-link black" to={'/therapists'}>
        Почати співпрацю
      </Link>
    </section>
  );
};

export default TherapistsReviews;
