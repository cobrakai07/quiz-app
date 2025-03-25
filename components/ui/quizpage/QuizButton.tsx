// components/QuizButton.js
import { TouchableOpacity, Text } from "react-native";
import React from "react";

const QuizButton = ({ title, onPress, disabled, variant = "primary" }:any) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return disabled ? "bg-gray-400" : "bg-blue-600";
      case "success":
        return "bg-green-600";
      default:
        return "bg-blue-600";
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`p-4 rounded-lg mt-5 ${getButtonStyle()}`}
    >
      <Text className="text-lg font-bold text-white text-center">{title}</Text>
    </TouchableOpacity>
  );
};

export default QuizButton;