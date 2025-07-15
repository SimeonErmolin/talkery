import React from 'react';

const Level4Page = ({ selectedAnswer, onAnswerChange }) => {
  return (
    <>
      <div className="quiz__header">
        <p className="quiz__header--title">Вкажіть вартість сесії</p>
      </div>

      <div className="quiz__questions">
        <div
          className={`quiz__questions--item no-img ${selectedAnswer === 'Неважливо' ? 'active' : ''}`}
          onClick={() => onAnswerChange('Неважливо')}
        >
          <p>Неважливо</p>
        </div>

        <div
          className={`quiz__questions--item no-img ${selectedAnswer === 'Менше 20€' ? 'active' : ''}`}
          onClick={() => onAnswerChange('Менше 20€')}
        >
          <p>Менше 20€</p>
        </div>

        <div
          className={`quiz__questions--item no-img ${selectedAnswer === '20€' ? 'active' : ''}`}
          onClick={() => onAnswerChange('20€')}
        >
          <p>20€</p>
        </div>

        <div
          className={`quiz__questions--item no-img ${selectedAnswer === '30€' ? 'active' : ''}`}
          onClick={() => onAnswerChange('30€')}
        >
          <p>30€</p>
        </div>

        <div
          className={`quiz__questions--item no-img ${selectedAnswer === '50€' ? 'active' : ''}`}
          onClick={() => onAnswerChange('50€')}
        >
          <p>50€</p>
        </div>
      </div>
    </>
  );
};

export default Level4Page;
