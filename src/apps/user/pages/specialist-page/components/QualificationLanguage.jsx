import React from 'react';

const QualificationLanguage = ({ qualifications, language }) => {
  return (
    <div className="specialist-card-container specialist-tags">
      <div>
        <h3 className="specialist-page__subtitle">Кваліфікація</h3>
        {!!qualifications?.length && (
          <div className="specialist-tags__container">
            {qualifications.map((item, index) => (
              <span key={index} className="specialist-tags__container--item">
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="general-information__item">
          <img
            src="/src/assets/icons/specialist-page/comment.png"
            alt=""
            className="general-information__item--comment"
          />
          <div>
            <p className="general-information__item--title">
              Мова надання сесій
            </p>
            <p className="general-information__item--info">
              {language.join(', ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationLanguage;
