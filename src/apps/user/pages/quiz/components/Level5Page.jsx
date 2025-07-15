import React from 'react';

const Level5Page = ({ selectedAnswer, onAnswerChange }) => {
  return (
    <>
      <div className="quiz__header">
        <p className="quiz__header--title">Коли бажаєте почати?</p>
      </div>

      <div className="quiz__questions">
        <div
          className={`quiz__questions--item no-img ${selectedAnswer === 'Неважливо' ? 'active' : ''}`}
          onClick={() => onAnswerChange('Неважливо')}
        >
          <p>Неважливо</p>
        </div>

        <div
          className={`quiz__questions--item no-img ${selectedAnswer === 'У найближчі дні' ? 'active' : ''}`}
          onClick={() => onAnswerChange('У найближчі дні')}
        >
          <p>У найближчі дні</p>
        </div>
      </div>
    </>
  );
};

export default Level5Page;
