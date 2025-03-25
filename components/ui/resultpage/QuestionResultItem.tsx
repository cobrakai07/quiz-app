// components/QuestionResultItem.js
import { View, Text } from "react-native";
import React from "react";

const QuestionResultItem = ({ question, index, selectedAnswer, correctAnswer, isCorrect }:any) => {
  return (
    <View
      className={`p-4 mb-2 rounded-lg ${isCorrect ? "bg-green-200" : "bg-red-200"}`}
    >
      <Text className="text-lg font-bold">Q{index + 1}: {question}</Text>
      <Text className="text-base">Your Answer: {selectedAnswer}</Text>
      {!isCorrect && (
        <Text className="text-base font-semibold">Correct Answer: {correctAnswer}</Text>
      )}
    </View>
  );
};

export default QuestionResultItem;