import React from 'react';

const Info = ({
  name,
  verified,
  experience,
  specialties,
  records,
  watching,
}) => {
  return (
    <div className="catalog-card__info">
      <div className="catalog-card__name">
        <h3>{name ?? '????'}</h3>
        {verified && (
          <img
            src="/assets/icons/search/officialVerified.svg"
            alt=""
            className="verified-icon"
          />
        )}
      </div>

      <p className="catalog-card__experience">
        {experience ?? '0'} рік досвіду
      </p>

      {!!specialties?.length && (
        <div className="catalog-card__specialties">
          {specialties.map((item, index) => (
            <span key={index} className="specialty">
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="catalog-card__stats">
        <span className="catalog-card__stat">
          <img src="/assets/icons/search/calendar.svg" alt="" />
          <p>{records ?? '0'} записів за 24 години</p>
        </span>
        <span className="catalog-card__stat">
          <img src="/assets/icons/search/people.svg" alt="" />
          <p>{watching ?? '0'} переглядають зараз</p>
        </span>
      </div>
    </div>
  );
};

export default Info;
