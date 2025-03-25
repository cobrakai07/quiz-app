// components/PageHeader.js
import { Text } from "react-native";
import React from "react";

const PageHeader = ({ title, className = "" }:any) => {
  return (
    <Text className={`text-2xl font-bold text-center mb-5 ${className}`}>
      {title}
    </Text>
  );
};

export default PageHeader;