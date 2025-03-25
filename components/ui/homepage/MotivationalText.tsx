// components/MotivationalText.js
import { View, Text } from "react-native";
import React from "react";

const MotivationalText = ({ 
  mainText = "Challenge your mind! 🤔",
  subText = "Test your knowledge 🕵️‍♂️",
  className = ""
}) => {
  return (
    <View className={`flex-1 justify-center items-center bg-white ${className}`}>
      <Text className="text-2xl font-bold text-center">{mainText}</Text>
      <Text className="text-xl font-semibold text-center">{subText}</Text>
    </View>
  );
};

export default MotivationalText;