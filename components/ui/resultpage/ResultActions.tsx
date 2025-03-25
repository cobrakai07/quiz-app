import { View } from "react-native";
import React from "react";
import ActionButton from "./ActionButton";

const ResultActions = ({ onRestart, onGoHome }:any) => {
  return (
    <View className="flex justify-center items-center">
      <ActionButton
        title="Restart Quiz"
        onPress={onRestart}
        variant="primary"
        className="w-3/4 mb-3"
      />
      <ActionButton
        title="Go to Home"
        onPress={onGoHome}
        variant="secondary"
        className="w-3/4"
      />
    </View>
  );
};

export default ResultActions;