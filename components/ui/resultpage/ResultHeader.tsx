// components/ResultHeader.js
import { Text } from "react-native";
import React from "react";

const ResultHeader = ({ score, totalQuestions, resultMessage }:any) => {
  return (
    <>
      <Text className="text-3xl font-bold text-center mb-5">Quiz Completed 🎉</Text>
      <Text className="text-xl font-semibold text-center mb-5">{resultMessage}</Text>
      <Text className="text-2xl font-bold text-center mb-5">
        {`Score: ${score} / ${totalQuestions}`}
      </Text>
    </>
  );
};

export default ResultHeader;