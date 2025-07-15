import React from 'react';
import useFilters from '../../../../../shared/hooks/useFilters.js';

const topics = [
  {
    category: 'Стосунки з собою',
    items: [
      'Дратівливість',
      'Панічні атаки',
      'Самотність',
      'Спроби самогубства',
      'Депресивні стани',
      'Тривожні стани',
      'Втома',
      'Самооцінка',
      'Навʼязливі думки',
      'Хімічні залежності',
      'Психосоматика',
      'Ставлення до їжі',
    ],
  },
  {
    category: 'Стосунки з іншими',
    items: [
      'Сімейні стосунки',
      'Інтимні стосунки',
      'Романтичні стосунки',
      'Співзалежність',
      'Абʼюз та емоційне насилля',
    ],
  },
  {
    category: 'Діяльність',
    items: [
      'Емоційне вигорання',
      'Самовизначення',
      'Ставлення до грошей',
      'Прокрастинація',
    ],
  },
  {
    category: 'Нові умови життя',
    items: [
      'Втрата та горе',
      'Адаптація, еміграція',
      'Народження дитини',
      'ПТСР',
      'Кризи і травми',
    ],
  },
];

const Level2PageA = ({ selectedAnswer, onAnswerChange }) => {
  const { expanded, toggleExpand } = useFilters();

  const handleCheckboxChange = (item) => {
    let updated = selectedAnswer ? [...selectedAnswer] : [];

    if (updated.includes(item)) {
      updated = updated.filter((i) => i !== item);
    } else {
      if (updated.length >= 5) {
        alert('Ви можете обрати не більше 5 запитів.');
        return;
      }
      updated.push(item);
    }

    onAnswerChange(updated);
  };

  return (
    <>
      <div className="quiz__header">
        <p className="quiz__header--title">
          Оберіть до 5 запитів які ви бажаєте вирішити
        </p>

        <p className="quiz__header--description">Необовʼязково</p>
      </div>

      <div className="quiz__drop-list">
        {topics.map((topic) => (
          <div key={topic.category} className="drop-item">
            <div
              className="drop-item__header"
              onClick={() => toggleExpand(topic.category)}
            >
              <p>{topic.category}</p>
              <button>
                <img
                  src={`/assets/icons/search/modal/${expanded[topic.category] ? 'minus' : 'plus'}.svg`}
                  alt=""
                />
              </button>
            </div>
            {expanded[topic.category] && (
              <div className="quiz__item-list">
                {topic.items.map((item) => (
                  <label key={item} className="item">
                    <input
                      type="checkbox"
                      checked={selectedAnswer && selectedAnswer.includes(item)}
                      onChange={() => handleCheckboxChange(item)}
                    />
                    <span className="checkbox"></span>
                    {item}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Level2PageA;
