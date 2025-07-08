import React from 'react';
import { Link } from 'react-router';

const AverageProfit = () => {
  return (
    <section className={'average-profit'}>
      <h2 className="title">
        Середній очікуваний <br className={'desktop-hide'} /> дохід з{' '}
        <span>Talkery</span>
      </h2>
      <img src="/src/assets/banners/profit.svg" alt="" className={'profit'} />
      <p className="description">працюючи від 40 годин на тиждень *</p>
      <p className="description">
        ці показники можуть бути ще вищими з вашим досвідом
      </p>
      <Link className="cta-link black" to={'/registration'}>
        Зареєструватись
      </Link>
    </section>
  );
};

export default AverageProfit;
