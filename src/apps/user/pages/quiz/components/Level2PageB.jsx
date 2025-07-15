import React from 'react';

const topics = [
  'Складність в комунікації, криза',
  'Розлучення',
  "Емоційне насилля, аб'юз",
  'Виховання дітей',
  'Інтимні та сексуальні стосунки',
  'Зрада',
];

const Level2PageB = ({ selectedAnswer, onAnswerChange }) => {
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

      <div className="quiz__item-list">
        {topics.map((item) => (
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
    </>
  );
};

export default Level2PageB;
