import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import useWindowWidth from '../../../../../shared/hooks/useWindowWidth.js';

const reviews = [
  {
    name: 'Дмитро',
    work: 'Відеоредактор',
    stars: 5,
    categories: ['Стрес', 'Вигорання', 'Мотивація'],
    text: "Я людина реактивна, тому коли мені щось треба, то треба терміново 😅 З подібних сервісів до Thera, я не знаю конкурентів які змогли б мене з'єднати з психологом швидше ніж ви. На сайті я буквально за пару хвилин обрав гарного психолога, та був шокований зручностю. 😱 Оплата на сайті через Apple Pay та створення діалогу одразу після оплати. Сконтактував зі своїм психологом, все супер! Дякую за чудовий сервіс 👍",
  },
  {
    name: 'Дмитро',
    work: 'Відеоредактор',
    stars: 5,
    categories: ['Стрес', 'Вигорання', 'Мотивація'],
    text: "Я людина реактивна, тому коли мені щось треба, то треба терміново 😅 З подібних сервісів до Thera, я не знаю конкурентів які змогли б мене з'єднати з психологом швидше ніж ви. На сайті я буквально за пару хвилин обрав гарного психолога, та був шокований зручностю. 😱 Оплата на сайті через Apple Pay та створення діалогу одразу після оплати. Сконтактував зі своїм психологом, все супер! Дякую за чудовий сервіс 👍",
  },
  {
    name: 'Дмитро',
    work: 'Відеоредактор',
    stars: 5,
    categories: ['Стрес', 'Вигорання', 'Мотивація'],
    text: "Я людина реактивна, тому коли мені щось треба, то треба терміново 😅 З подібних сервісів до Thera, я не знаю конкурентів які змогли б мене з'єднати з психологом швидше ніж ви. На сайті я буквально за пару хвилин обрав гарного психолога, та був шокований зручностю. 😱 Оплата на сайті через Apple Pay та створення діалогу одразу після оплати. Сконтактував зі своїм психологом, все супер! Дякую за чудовий сервіс 👍",
  },
];

const UserReviews = () => {
  const width = useWindowWidth();
  const isMobileOrTablet = width < 1425;

  return (
    <section className="user-reviews">
      <h2 className="title">
        Користувачі про <span>Talkery</span>
      </h2>

      {isMobileOrTablet ? (
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="user-reviews__items"
          spaceBetween={20}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="user-reviews__item">
                <div className="review-header">
                  <img
                    src="/src/assets/landing/review_avatar.png"
                    alt=""
                    className="avatar"
                  />
                  <div className="about">
                    <h3 className="name">{review.name}</h3>
                    <p className="work">{review.work}</p>
                  </div>
                  <div className="stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <img key={i} src="/src/assets/icons/star.svg" alt="" />
                    ))}
                  </div>
                </div>
                <div className="review-categories">
                  {review.categories.map((category, idx) => (
                    <div key={idx} className="review-categories__item">
                      {category}
                    </div>
                  ))}
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="user-reviews__items">
          {reviews.map((review, index) => (
            <div key={index} className="user-reviews__item">
              <div className="review-header">
                <img
                  src="/src/assets/landing/review_avatar.png"
                  alt=""
                  className="avatar"
                />
                <div className="about">
                  <h3 className="name">{review.name}</h3>
                  <p className="work">{review.work}</p>
                </div>
                <div className="stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <img key={i} src="/src/assets/icons/star.svg" alt="" />
                  ))}
                </div>
              </div>
              <div className="review-categories">
                {review.categories.map((category, idx) => (
                  <div key={idx} className="review-categories__item">
                    {category}
                  </div>
                ))}
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default UserReviews;
