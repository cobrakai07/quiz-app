import { View, Text } from "react-native";
import React from "react";
import CardStack from "@/components/ui/dashboard/cardStack";

const index = () => {
  return (
    <View className=" flex items-center justify-center h-screen">
      
      <View className="w-[80%] h-16 bg-cyan-300 rounded ">
        <View className="w-[100%] h-16 bg-cyan-400 m-3 rounded">
          <View className="w-[100%] h-16 bg-cyan-500 m-3 rounded"></View>
        </View>
      </View>

      <View className="m-4"></View>
      <View className="m-4">
      <CardStack/>
      </View>
      

      <View className="w-[80%] h-52 bg-cyan-400 rounded-[30px] border">
        <View className="w-[100%] h-52 bg-cyan-300 -m-[6.5px]  rounded-[30px] border"></View>
      </View>
      <View className="m-4"></View>

      <View className="w-[100%] flex flex-row justify-between p-4">
        <View className="w-[45%] h-20 bg-gray-300 rounded-full border">
          <View className="w-[100%] h-20 bg-gray-100 -m-[6px]   rounded-full border"></View>
        </View>
        <View className="w-[50%] h-20 bg-gray-300 rounded-[30px] border">
          <View className="w-[100%] h-20 bg-gray-100 -m-[6px]  rounded-[30px] border flex justify-center items-center">
            <Text className="text-2xl ">Task</Text>
          </View>
        </View>
      </View>

      <View className="m-4"></View>

      <View className="w-[100%] flex-row p-4">
        <View className="w-[60%] h-52 bg-cyan-400 rounded-[30px] border">
          <View className="w-[100%] h-52 bg-cyan-300 -m-[6.5px]  rounded-[30px] border"></View>
        </View>
        <View className="w-[100%]">
          <View className="w-[40%] h-24 bg-cyan-400 rounded-[30px] border ">
            <View className="w-[100%] h-24 bg-cyan-300 -m-[6.5px]  rounded-[30px] border"></View>
          </View>
          <View className="w-[40%] h-24 bg-gray-900 rounded-[30px] border ">
            <View className="w-[100%] h-24 bg-gray-200 -m-[6.5px]  rounded-[30px] border"></View>
          </View>
        </View>
      </View>

      


    </View>
  );
};

export default index;
