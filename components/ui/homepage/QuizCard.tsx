// components/QuizCard.js
import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const QuizCard = ({ title, onPress, colors = ["#eb1a17", "#f5eaea"] }:any) => {
  return (
    <LinearGradient
      colors={colors}
      className="rounded-lg p-4 mb-2"
    >
      <TouchableOpacity onPress={onPress}>
        <Text className="text-lg text-white text-center font-semibold">
          {title}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default QuizCard;