import React, { useState, useEffect } from 'react';
import { fetchQuizData } from './services/api';
import QuizStart from './components/QuizStart';
import QuizQuestion from './components/QuizQuestion';
import QuizSummary from './components/QuizSummary';
import './App.css';

const App = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  useEffect(() => {
    fetchQuizData().then(data => setQuizData(data));
  }, []);

  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 10);
    }
    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setIsQuizStarted(false);
    setIsQuizFinished(false);
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="app-container">
      {!isQuizStarted && <QuizStart startQuiz={startQuiz} />}
      {isQuizStarted && !isQuizFinished && (
        <QuizQuestion
          question={quizData[currentQuestionIndex]}
          handleAnswer={handleAnswer}
        />
      )}
      {isQuizFinished && <QuizSummary score={score} total={quizData.length} restartQuiz={restartQuiz} />}
    </div>
  );
};

export default App;
