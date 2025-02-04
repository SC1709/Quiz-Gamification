import React from 'react';
import { Button } from 'antd';

const QuizSummary = ({ score, total, restartQuiz }) => {
  return (
    <div className="summary-container">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {total * 10}</p>
      <Button type="primary" onClick={restartQuiz}>Play Again</Button>
    </div>
  );
};

export default QuizSummary;
