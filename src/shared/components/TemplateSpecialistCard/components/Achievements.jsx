import React from 'react';

const Achievements = ({ selection }) => {
  const achievementsList = {
    'best-match': {
      icon: '/assets/icons/search/darts.svg',
      label: 'Найкращий збіг',
    },
    recommended: {
      icon: '/assets/icons/search/star.svg',
      label: 'Рекомендуємо',
    },
  };

  const achievement = achievementsList[selection];

  return (
    <div>
      {achievement && (
        <section className="catalog-card__achievement">
          <img src={achievement.icon} alt="" />
          <p className={selection}>{achievement.label}</p>
        </section>
      )}
    </div>
  );
};

export default Achievements;
