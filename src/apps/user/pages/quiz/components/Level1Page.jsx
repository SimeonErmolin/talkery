import React from 'react';

const Level1Page = ({ selectedAnswer, onAnswerChange }) => {
  return (
    <>
      <div className="quiz__header">
        <p className="quiz__header--title">Оберіть тип терапії</p>
      </div>

      <div className="quiz__questions">
        <div
          className={`quiz__questions--item ${selectedAnswer === 'Особиста' ? 'active' : ''}`}
          onClick={() => onAnswerChange('Особиста')}
        >
          <img src="/assets/quiz/personal.svg" alt="" />
          <p>Особиста</p>
        </div>

        <div
          className={`quiz__questions--item ${selectedAnswer === 'Парна' ? 'active' : ''}`}
          onClick={() => onAnswerChange('Парна')}
        >
          <img src="/assets/quiz/dual.svg" alt="" />
          <p>Парна</p>
        </div>

        <div
          className={`quiz__questions--item ${selectedAnswer === 'Дитяча' ? 'active' : ''}`}
          onClick={() => onAnswerChange('Дитяча')}
        >
          <img src="/assets/quiz/children.svg" alt="" />
          <p>Дитяча</p>
        </div>
      </div>

      <div className="quiz__best-specialists">
        <img src="/assets/quiz/duck.gif" alt="" />
        <p className="quiz__best-specialists--title">120+ найкращих фахівців</p>
        <p className="quiz__best-specialists--description">
          готові допомогти вам просто зараз
        </p>
      </div>
    </>
  );
};

export default Level1Page;
