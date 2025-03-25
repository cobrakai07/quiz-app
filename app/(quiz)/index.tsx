import { View, FlatList } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useQuiz } from "../../contexts/QuizContext";
import PageHeader from "@/components/ui/homepage/PageHeader";
import HeroImage from "@/components/ui/homepage/HeroImage";
import QuizCard from "@/components/ui/homepage/QuizCard";
import MotivationalText from "@/components/ui/homepage/MotivationalText";

const QuizHome = () => {
  const navigation = useRouter();
  const { startQuiz, quizzes } = useQuiz();

  const handleQuizStart = (quiz:any) => {
    startQuiz(quiz);
    navigation.push("/(quiz)/quizscreen");
  };

  return (
    <View className="flex-1 p-5 bg-white">
      <PageHeader title="Let the quiz begin! 🚀🧠" />

      <HeroImage 
        source={require("../../assets/images/face.png")} 
        size={96}
      />

      <FlatList
        data={quizzes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <QuizCard
            title={item.title}
            onPress={() => handleQuizStart(item)}
          />
        )}
      />

      <MotivationalText />
    </View>
  );
};

export default QuizHome;