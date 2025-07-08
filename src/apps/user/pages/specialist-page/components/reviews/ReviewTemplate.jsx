import React from 'react';
import AvatarOrLetter from './AvatarOrLetter.jsx';

const ReviewTemplate = ({ avatar, name, date, stars, comment }) => {
  return (
    <>
      <div className="review-header">
        <div className="review-header__user">
          <AvatarOrLetter value={avatar} />

          <div>
            <p className="review-header__user--name">{name}</p>
            <p className="review-header__user--date">{date}</p>
          </div>
        </div>

        <div className="review-header__stars"></div>
      </div>

      <pre>
        <p className="specialist-reviews__text">{comment}</p>
      </pre>
    </>
  );
};

export default ReviewTemplate;
