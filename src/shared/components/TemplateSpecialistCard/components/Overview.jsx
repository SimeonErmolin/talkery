import React from 'react';

const Overview = ({ cost, sessions, likes }) => {
  const InfoItem = ({ icon, children }) => (
    <div className="specialist-info__item">
      <img src={`/src/assets/icons/specialist-card/${icon}.svg`} alt="" />
      <p>{children}</p>
    </div>
  );

  return (
    <section className="specialist-info">
      <InfoItem icon={'wallet'} children={`${cost ?? '0'}€`} />
      <InfoItem icon={'video'} children={`${sessions ?? '0'} сесій`} />
      <InfoItem icon={'like'} children={`${likes ?? '0'} відгуків`} />
    </section>
  );
};

export default Overview;
