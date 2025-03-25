// components/QuizOption.js
import { TouchableOpacity, Text } from "react-native";
import React from "react";

const QuizOption = ({
  option,
  index,
  isAnswered,
  isCorrect,
  isSelected,
  onSelect,
}:any) => {
  const getBackgroundColor = () => {
    if (isAnswered) {
      if (isCorrect) return "bg-green-500";
      if (isSelected && !isCorrect) return "bg-red-500";
      return "bg-gray-300";
    }
    return isSelected ? "bg-blue-500" : "bg-gray-300";
  };

  return (
    <TouchableOpacity
      onPress={() => onSelect(index)}
      className={`p-3 rounded-lg mb-2 text-center ${getBackgroundColor()}`}
      disabled={isAnswered}
    >
      <Text className="text-lg font-semibold text-center text-white">
        {option}
      </Text>
    </TouchableOpacity>
  );
};

export default QuizOption;