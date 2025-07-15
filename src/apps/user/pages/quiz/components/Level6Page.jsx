import React from 'react';

const Level6Page = ({ selectedAnswer, onAnswerChange }) => {
  return (
    <>
      <div className="quiz__header">
        <p className="quiz__header--title">Додатково</p>

        <p className="quiz__header--description">Необовʼязково</p>
      </div>

      <div className="quiz__questions">
        <div
          className={`quiz__questions--item no-img ${selectedAnswer === 'Неважливо' ? 'active' : ''}`}
          onClick={() => onAnswerChange('Неважливо')}
        >
          <p>Неважливо</p>
        </div>

        <div
          className={`quiz__questions--item ${selectedAnswer === 'Досвід роботи з військовими' ? 'active' : ''}`}
          onClick={() => onAnswerChange('Досвід роботи з військовими')}
        >
          <img src="/assets/quiz/military.svg" alt="" />
          <p>Досвід роботи з військовими</p>
        </div>

        <div
          className={`quiz__questions--item ${selectedAnswer === 'Досвід роботи з ЛГБТ+' ? 'active' : ''}`}
          onClick={() => onAnswerChange('Досвід роботи з ЛГБТ+')}
        >
          <img src="/assets/quiz/rainbow.svg" alt="" />
          <p>Досвід роботи з ЛГБТ+</p>
        </div>
      </div>
    </>
  );
};

export default Level6Page;
