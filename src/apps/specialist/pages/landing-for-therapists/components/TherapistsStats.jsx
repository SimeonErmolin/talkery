import React from 'react';

const TherapistsStats = () => {
  return (
    <section className={'stats-section'}>
      <div className="stats-section__item">
        <h3>500+</h3>
        <p>записів на нашій платформі за місяць</p>
      </div>
      <div className="stats-section__item">
        <h3>+7</h3>
        <p>нових клієнтів на фахівця за місяць</p>
      </div>
      <div className="stats-section__item">
        <h3>12+</h3>
        <p>проведених сесій у фахівця за місяць</p>
      </div>
      <div className="stats-section__item">
        <h3>120+</h3>
        <p>кращих фахівців вже співпрацюють з нами</p>
      </div>
    </section>
  );
};

export default TherapistsStats;
