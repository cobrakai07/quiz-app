// components/ActionButton.js
import { TouchableOpacity, Text } from "react-native";
import React from "react";

const ActionButton = ({ title, onPress, variant = "primary", className = "" }:any) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600";
      case "secondary":
        return "bg-gray-500";
      case "danger":
        return "bg-red-600";
      default:
        return "bg-blue-600";
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`p-4 rounded-lg ${getBackgroundColor()} ${className}`}
    >
      <Text className="text-lg font-bold text-white text-center">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;