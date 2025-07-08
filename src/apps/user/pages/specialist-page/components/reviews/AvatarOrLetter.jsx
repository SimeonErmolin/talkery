import React from 'react';

const AvatarOrLetter = ({ value }) => {
  const isImage = /\.(jpeg|jpg|gif|png|svg|webp)$/i.test(value);

  return isImage ? (
    <img
      src={value}
      alt="avatar"
      style={{ width: 40, height: 40, borderRadius: '50%' }}
    />
  ) : (
    <div className="review-header__user--avatar">
      {value.charAt(0).toUpperCase()}
    </div>
  );
};

export default AvatarOrLetter;
