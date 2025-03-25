import React, { createContext, useState, useContext } from "react";
import { quizzes } from "../assets/quiz/quizzes";


const QuizContext = createContext();


export const QuizProvider = ({ children }) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]); 


  const startQuiz = (quiz) => {
    if (!quiz || !quiz.questions || quiz.questions.length === 0) {
      console.error("Invalid quiz data:", quiz);
      return;
    }

    setSelectedQuiz(quiz);
    setQuestionIndex(0);
    setSelectedOption(null);
    setCorrectAnswers(0);
    setQuizCompleted(false);
  };


  const submitAnswer = () => {
    if (!selectedQuiz || !selectedQuiz.questions[questionIndex]) return;

    if (selectedOption === selectedQuiz.questions[questionIndex].correctAnswer) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };


  const nextQuestion = () => {
    if (!selectedQuiz || !selectedQuiz.questions) return;
    
    if (questionIndex < selectedQuiz.questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };


  const resetQuiz = () => {
    setAnsweredQuestions([]);
    setQuestionIndex(0);
    setSelectedOption(null);
    setCorrectAnswers(0);
    setQuizCompleted(false);
  };

  return (
    <QuizContext.Provider
      value={{
        quizzes,
        selectedQuiz,
        questionIndex,
        selectedOption,
        correctAnswers,
        quizCompleted,
        answeredQuestions,
        startQuiz,
        setSelectedOption,
        setCorrectAnswers,
        submitAnswer,
        nextQuestion,
        resetQuiz,
        setQuestionIndex,
        setAnsweredQuestions, 
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};


export const useQuiz = () => useContext(QuizContext);
