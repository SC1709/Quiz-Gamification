import React from 'react';
import { Button } from 'antd';

const QuizStart = ({ startQuiz }) => {
  return (
    <div className="start-container">
      <h1>Welcome to the Quiz Game!</h1>
      <Button type="primary" size="large" onClick={startQuiz}>Start Quiz</Button>
    </div>
  );
};

export default QuizStart;

