import React from 'react';

const QualificationsApproaches = ({ qualifications, approaches }) => {
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
      </div>

      <div>
        <h3 className="specialist-page__subtitle specialist-tags__subtitle">
          Підходи
        </h3>
        {!!approaches?.length && (
          <div className="specialist-tags__container">
            {approaches.map((item, index) => (
              <span key={index} className="specialist-tags__container--item">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QualificationsApproaches;
