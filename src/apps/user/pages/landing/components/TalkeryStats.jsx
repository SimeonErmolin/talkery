import React from 'react';

const TalkeryStats = () => {
  return (
    <section className={'stats-section'}>
      <div className="stats-section__item">
        <h3>56240</h3>
        <p>сесій вже проведено за допомогою Thėra</p>
      </div>
      <div className="stats-section__item">
        <h3>96%</h3>
        <p>клієнтів мають позитивний результат вже після першої сесії</p>
      </div>
      <div className="stats-section__item">
        <h3>120+</h3>
        <p>найкращих фахівців на платформі Thėra</p>
      </div>
      <div className="stats-section__item">
        <h3>7 хв</h3>
        <p>середній час на пошук свого фахівця</p>
      </div>
    </section>
  );
};

export default TalkeryStats;
