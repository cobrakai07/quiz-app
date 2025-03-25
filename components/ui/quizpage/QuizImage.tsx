import { Image } from "react-native";
import React from "react";

interface typeProps{
    type:string;
}
const QuizImage = ({ type }:typeProps) => {
  const getImageSource = () => {
    switch (type) {
      case "think":
        return require("../../../assets/images/think.png");
      case "correct":
        return require("../../../assets/images/correct.png");
      case "learn":
        return require("../../../assets/images/learn.png");
      default:
        return null;
    }
  };

  return (
    <Image
      source={getImageSource()}
      className="w-96 h-96"
      resizeMode="contain"
    />
  );
};

export default QuizImage;