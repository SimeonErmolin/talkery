import React from 'react';

const Avatar = ({ avatar }) => {
  return (
    <div className="catalog-card__image">
      <img src={avatar} alt="" className="image-avatar" />
      <img
        src="/src/assets/icons/search/play.svg"
        alt=""
        className="image-play"
      />
    </div>
  );
};

export default Avatar;
