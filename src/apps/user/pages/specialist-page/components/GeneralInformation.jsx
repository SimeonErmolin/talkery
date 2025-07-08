import React from 'react';

const GeneralInformation = ({ language, therapy }) => {
  return (
    <div className="specialist-card-container general-information">
      <h3 className="specialist-page__subtitle">Загальна інформація</h3>
      <div className="general-information__item">
        <img
          src="/src/assets/icons/specialist-page/comment.png"
          alt=""
          className="general-information__item--comment"
        />
        <div>
          <p className="general-information__item--title">Мова надання сесій</p>
          <p className="general-information__item--info">
            {language.join(', ')}
          </p>
        </div>
      </div>
      <div className="general-information__item">
        <img
          src="/src/assets/icons/specialist-page/flag.png"
          alt=""
          className="general-information__item--flag"
        />
        <div>
          <p className="general-information__item--title">Типи терапії</p>
          <p className="general-information__item--info">
            {therapy.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
