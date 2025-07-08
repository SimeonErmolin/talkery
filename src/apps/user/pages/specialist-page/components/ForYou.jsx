import React from 'react';

const GREEN_MARK_IMG = '/assets/icons/specialist-page/green-mark.svg';

const ForYou = () => {
  return (
    <div className="specialist-card-container for-you-container">
      <pre>
        <h3 className="specialist-page__subtitle specialist-page__subtitle--for-you">
          {'Ми перевірили для вас\n' + 'кожного фахівця'}
        </h3>
      </pre>

      <div className="for-you">
        <div className="for-you__item">
          <img src={GREEN_MARK_IMG} alt="" className="for-you__item--img" />
          <p className="for-you__item--text">Освіта</p>
        </div>
        <div className="for-you__item">
          <img src={GREEN_MARK_IMG} alt="" className="for-you__item--img" />
          <p className="for-you__item--text">Досвід</p>
        </div>
        <div className="for-you__item">
          <img src={GREEN_MARK_IMG} alt="" className="for-you__item--img" />
          <p className="for-you__item--text">Сертифікація</p>
        </div>
      </div>
    </div>
  );
};

export default ForYou;
