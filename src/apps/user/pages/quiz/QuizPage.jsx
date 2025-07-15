import React, { useState } from 'react';
import './QuizPage.scss';
import Level1Page from './components/Level1Page.jsx';
import LoadingPage from './components/LoadingPage.jsx';
import Level3Page from './components/Level3Page.jsx';
import Level4Page from './components/Level4Page.jsx';
import Level5Page from './components/Level5Page.jsx';
import Level6Page from './components/Level6Page.jsx';
import Level2PageA from './components/Level2PageA.jsx';
import Level2PageB from './components/Level2PageB.jsx';
import Level2PageC from './components/Level2PageC.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import { useNavigate } from 'react-router';

const QuizPage = () => {
  const navigate = useNavigate();
  const totalPages = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState({});
  const [currentAnswer, setCurrentAnswer] = useState('');

  const nextPage = () => {
    if (
      (currentPage === 2 && (!currentAnswer || currentAnswer.length === 0)) ||
      (currentPage !== 2 && !currentAnswer)
    ) {
      alert('Пожалуйста, выберите ответ.');
      return;
    }
    setAnswers((prev) => ({
      ...prev,
      [currentPage]: currentAnswer,
    }));
    setCurrentPage((prev) => prev + 1);
    setCurrentAnswer(
      answers[currentPage + 1] || (currentPage + 1 === 2 ? [] : '')
    );
  };

  const prevPage = () => {
    if (currentPage === 1) return navigate(-1);
    setCurrentPage((prev) => prev - 1);
    setCurrentAnswer(answers[currentPage - 1] || '');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <Level1Page
            selectedAnswer={currentAnswer}
            onAnswerChange={setCurrentAnswer}
          />
        );
      case 2:
        switch (answers[1]) {
          case 'Особиста':
            return (
              <Level2PageA
                selectedAnswer={currentAnswer}
                onAnswerChange={setCurrentAnswer}
              />
            );
          case 'Парна':
            return (
              <Level2PageB
                selectedAnswer={currentAnswer}
                onAnswerChange={setCurrentAnswer}
              />
            );
          case 'Дитяча':
            return (
              <Level2PageC
                selectedAnswer={currentAnswer}
                onAnswerChange={setCurrentAnswer}
              />
            );
          default:
            return <div>Ошибка: неизвестный ответ</div>;
        }
      case 3:
        return (
          <Level3Page
            selectedAnswer={currentAnswer}
            onAnswerChange={setCurrentAnswer}
          />
        );
      case 4:
        return (
          <Level4Page
            selectedAnswer={currentAnswer}
            onAnswerChange={setCurrentAnswer}
          />
        );
      case 5:
        return (
          <Level5Page
            selectedAnswer={currentAnswer}
            onAnswerChange={setCurrentAnswer}
          />
        );
      case 6:
        return (
          <Level6Page
            selectedAnswer={currentAnswer}
            onAnswerChange={setCurrentAnswer}
          />
        );
      case 7:
        return <LoadingPage />;
      default:
        return <div>Тест завершён</div>;
    }
  };

  return (
    <div className="quiz">
      <div className="quiz__main">
        {currentPage !== 7 && (
          <ProgressBar currentPage={currentPage} totalPages={totalPages - 1} />
        )}

        {renderCurrentPage()}
      </div>

      {currentPage !== 7 && (
        <div className="quiz__footer">
          <button className="quiz__footer--btn-back" onClick={prevPage}>
            <img src="/assets/quiz/btn-back.svg" alt="" />
          </button>
          <button className="quiz__footer--btn-next" onClick={nextPage}>
            Далі
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
