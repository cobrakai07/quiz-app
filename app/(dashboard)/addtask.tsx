import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const AddTask = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <View className="h-screen bg-black flex justify-start">
      <View className="h-[91%] bg-white rounded-b-3xl">
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ padding: 10 }}
        >
         
          <View className="flex flex-row justify-between p-2">
            <View className="flex justify-center items-center">
              <Text className="text-2xl font-semibold">What's your Goal?</Text>
            </View>
            <View className="flex justify-center items-center">
              {/* <FontAwesome size={24} name="newspaper-o" color={"black"} /> */}
              <Image
                source={require("../../assets/images/dp.jpg")}
                className="h-[40px] w-[40px] rounded-full"
              />
              <Image />
            </View>
          </View>
          <View className="flex justify-center items-center">
          <View className="w-[80%] h-52 bg-cyan-400 rounded-[30px] border">
            <View className="w-[100%] h-52 bg-cyan-300 -m-[6.5px]  rounded-[30px] border flex justify-center items-center gap-2">
            <FontAwesome size={25} name="bullseye" color={"black"} />
            <TextInput
            className="p-4 border w-[170px] rounded-lg bg-gray-50"
          onChangeText={onChangeText}
           placeholder="Whats your goal?"
          value={text}
        />
        <View className="flex flex-row gap-2">
        <TextInput
          className="p-3 border w-[120px]  rounded-lg bg-gray-100"
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Time required"
          // keyboardType="numeric"
        />
        <TouchableOpacity className="flex justify-center item-center p-3 border rounded-lg bg-gray-900">
          <Text className="text-white font-semibold">Create Goal</Text>
        </TouchableOpacity>
       
        </View>
      
            </View>
          </View>
          </View>
         
          <View className="flex justify-center items-center">
            <Image
              source={require("../../assets/task/goal.jpg")}
              className="h-[220px] w-[220px]"
            />
          </View>
          {/* <Text>knknknk</Text> */}
        </ScrollView>
      </View>
    </View>
  );
};

export default AddTask;
