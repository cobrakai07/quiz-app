import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const AddTask = () => {
  return (
    <View className="h-screen bg-black flex justify-start">
      <View className="h-[91%] bg-white rounded-b-3xl">
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ padding: 10 }}
        >
          <View className="flex justify-center items-center">
            <Image
              source={require("../../assets/task/goal.jpg")}
              className="h-[220px] w-[220px]"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddTask;
