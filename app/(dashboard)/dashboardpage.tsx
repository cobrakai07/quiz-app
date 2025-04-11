import { View, Text, ScrollView, FlatList, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";
import CardStack from "@/components/ui/dashboard/cardStack";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const dashboardpage = () => {
  const sampleHorizontalData = [
    { id: "h1", title: "Item 1" },
    { id: "h2", title: "Item 2" },
    { id: "h3", title: "Item 3" },
    { id: "h4", title: "Item 4" },
    { id: "h5", title: "Item 5" },
  ];

  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval:any;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (totalSeconds:any) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const pad = (n:any) => (n < 10 ? "0" + n : n);

    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  const renderTasks = ({ item }: any) => {
    return (
      <View className="w-[120px] h-20 bg-gray-300 rounded-[20px] border m-2">
        <View className="w-full h-20 bg-gray-50 -m-[6px] rounded-[20px] border flex justify-center items-center">
          <Text className="text-2xl ">{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <View className="h-screen bg-black flex justify-start">
      <View className="h-[91%] bg-white rounded-b-3xl">
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ padding: 10 }}
        >
          {/* start coding from here  */}

          <View className="flex flex-row justify-between p-2">
            <View className="flex justify-center items-center">
            <Text className="text-2xl font-semibold">What's your story?</Text>
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

          {/* book */}
          <View className="flex justify-center items-center">
            <View className="w-[100%] flex-row p-4">
              <View className="w-[60%] h-52 bg-cyan-400 rounded-[30px] border">
                <View className="w-[100%] h-52 bg-cyan-200 -m-[6.5px]  rounded-[30px] border flex justify-center items-center">
                <View className="flex flex-row items-center justify-center gap-2">
                <FontAwesome size={15} name="hourglass-half" color={"black"} />
                  <Text>Ongoing task</Text>
                  
                  </View>
                  
                  <Text className="text-2xl">DSA and JAVA</Text>
                
                  
                  
                  <Text>{formatTime(seconds)}</Text>
                  
                 
                  {/* <View>
                    <Button
                      title={running ? "Pause" : "Start"}
                      onPress={() => setRunning(!running)}
                    />
                    <Button title="Reset" onPress={reset} />
                  </View> */}
                </View>
              </View>
              <View className="w-[100%]">
                <View className="w-[40%] h-24 bg-gray-900 rounded-[30px] border ">
                  <View className="w-[100%] h-24 bg-gray-100 -m-[6.5px]  rounded-[30px] border  flex justify-center items-center">
                    <Text className="">Complete Task</Text>
                    
                  </View>
                </View>
                <View className="w-[40%] h-24 bg-gray-900 rounded-[30px] border ">
                  <View className="w-[100%] h-24 bg-gray-100 -m-[6.5px]  rounded-[30px] border flex justify-center items-center">
                  <Text className="">Cancel Task</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* book */}

          {/* convert the below view items into flatlist horizontal */}
          {/* <View className="p-2">
            <View className='flex flex-row justify-between items-center'>
            <Text className='text-3xl '>Your Goals</Text>
            <Text className='text-cyan-400 '>Add</Text>
            </View>
            <FlatList
            data={sampleHorizontalData}
            renderItem={renderTasks}
            keyExtractor={item => item.id}
            horizontal
            />
            </View> */}

          {/* <View className='p-2 flex gap-2'>
              <View>
                <Text className='font-semibold text-lg'>Urgent</Text>
              </View>
            <View className="w-[100%] h-36 bg-gray-200 rounded-[30px] border">
                <View className="w-[100%] h-36 bg-gray-800 -m-[6.5px]  rounded-[30px] border"></View>
            </View>
            </View> */}

          <View className="flex justify-center items-center">
            <Image
              source={require("../../assets/task/task.jpg")}
              className="h-[220px] w-[220px]"
            />
          </View>
          
          <CardStack />
        </ScrollView>
      </View>
    </View>
  );
};

export default dashboardpage;
