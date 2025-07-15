import React from 'react';

const Level3Page = ({ selectedAnswer, onAnswerChange }) => {
  return (
    <>
      <div className="quiz__header">
        <p className="quiz__header--title">Вкажіть стать фахівця</p>
      </div>

      <div className="quiz__questions">
        <div
          className={`quiz__questions--item no-img ${selectedAnswer === 'Неважливо' ? 'active' : ''}`}
          onClick={() => onAnswerChange('Неважливо')}
        >
          <p>Неважливо</p>
        </div>

        <div
          className={`quiz__questions--item ${selectedAnswer === 'Жінка' ? 'active' : ''}`}
          onClick={() => onAnswerChange('Жінка')}
        >
          <img src="/assets/quiz/woman.svg" alt="" />
          <p>Жінка</p>
        </div>

        <div
          className={`quiz__questions--item ${selectedAnswer === 'Чоловік' ? 'active' : ''}`}
          onClick={() => onAnswerChange('Чоловік')}
        >
          <img src="/assets/quiz/man.svg" alt="" />
          <p>Чоловік</p>
        </div>
      </div>
    </>
  );
};

export default Level3Page;
