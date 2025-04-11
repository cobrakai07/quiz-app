import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import MyGiftedLineChart from "@/components/ui/dashboard/MyGiftedLineChart";
import MyPieChart from "@/components/ui/dashboard/MyPieCart";
const Progress = () => {
  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const commitsData = [
    { date: "2025-03-20", count: 1 },
    { date: "2025-03-22", count: 2 },
    { date: "2025-03-23", count: 3 },
    { date: "2025-03-24", count: 4 },
    { date: "2025-03-25", count: 5 },
    // Add more entries up to 105 days from the start date
  ];

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
  };
  const chartConfigHeatMap = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(34, 128, 176, ${opacity})`,
    labelColor: () => "#555",
  };
  return (
    <View className="h-screen bg-black flex justify-start">
      <View className="h-[91%] bg-white rounded-b-3xl">
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ padding: 10 }}
        >

          <View className="flex flex-row justify-between p-2">
                      <View className="flex justify-center items-center">
                      <Text className="text-2xl font-semibold">What's your progress?</Text>
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
          {/* <View className="flex justify-center items-center">
            <Image
              source={require("../../assets/task/progress.jpg")}
              className="h-[220px] w-[220px]"
            />
          </View> */}
          <MyPieChart/>
          <View className="flex justify-center items-center">
          <MyGiftedLineChart/>
          </View>

          
         
        </ScrollView>
      </View>
    </View>
  );
};

export default Progress;
