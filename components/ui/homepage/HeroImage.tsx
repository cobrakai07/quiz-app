// components/HeroImage.js
import { View, Image } from "react-native";
import React from "react";

const HeroImage = ({ source, size = 96 }:any) => {
  return (
    <View className="flex-1 flex-row justify-center items-center bg-white p-52">
      <Image
        source={source}
        className={`w-${size} h-${size}`}
        resizeMode="contain"
      />
    </View>
  );
};

export default HeroImage;