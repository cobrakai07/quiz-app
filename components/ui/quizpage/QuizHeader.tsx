// components/QuizHeader.js
import { Text } from "react-native";
import React from "react";

const QuizHeader = ({ currentQuestion, totalQuestions, questionText }:any) => {
  return (
    <>
      <Text className="text-2xl font-bold text-center mb-5">
        {`Question ${currentQuestion} of ${totalQuestions}`}
      </Text>
      <Text className="text-xl font-semibold text-center mb-5">
        {questionText}
      </Text>
    </>
  );
};

export default QuizHeader;