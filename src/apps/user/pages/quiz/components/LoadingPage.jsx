import React from 'react';

const LoadingPage = () => {
  return (
    <div className="quiz__loading">
      <img
        src="/assets/quiz/robot.gif"
        alt=""
        className="quiz__loading--robot"
      />

      <img src="/assets/quiz/logo.svg" alt="" className="quiz__loading--logo" />

      <p className="quiz__loading--description">
        Ми аналізуємо ваші відповіді <br />
        та підбираємо найкращих фахівців
      </p>

      <div className="quiz__loading--progress-bar">
        progress bar ..........................................
      </div>

      <p className="quiz__loading--footer">
        наш алгоритм бездоганий бо працює на основі <br />
        штучного інтелекту, тому він дійсно знайде для <br />
        вас найкращого фахівця який вам точно підійде
      </p>
    </div>
  );
};

export default LoadingPage;
