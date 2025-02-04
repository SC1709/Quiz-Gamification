import React from 'react';
import { Card, Button } from 'antd';

const QuizQuestion = ({ question, handleAnswer }) => {
  if (!question) return <p>Loading...</p>;

  return (
    <div className="question-container">
      <Card title={question.description} className="question-card">
        {question.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(option.is_correct)}
            className="option-btn"
          >
            {typeof option === 'object' ? option.description : option}
          </Button>
        ))}
      </Card>
    </div>
  );
};

export default QuizQuestion;
