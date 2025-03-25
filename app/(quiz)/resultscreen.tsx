import { View, ScrollView } from "react-native";
import React from "react";
import { useQuiz } from "../../contexts/QuizContext";
import { useRouter } from "expo-router";
import ResultHeader from "@/components/ui/resultpage/ResultHeader";
import QuestionResultItem from "@/components/ui/resultpage/QuestionResultItem";
import ResultActions from "@/components/ui/resultpage/ResultActions";

const ResultScreen = () => {
  const { correctAnswers, selectedQuiz, resetQuiz, answeredQuestions } = useQuiz();
  const navigation = useRouter();
  const totalQuestions = selectedQuiz?.questions.length || 0;
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  const getResultMessage = () => {
    if (scorePercentage === 100) return "🎉 Perfect Score! Amazing job!";
    if (scorePercentage >= 70) return "👏 Great Job! You passed!";
    return "😕 Keep practicing! You can do it!";
  };

  const handleRestartQuiz = () => {
    resetQuiz();
    navigation.dismissAll();
    navigation.push("/(quiz)/quizscreen");
  };

  const handleGoHome = () => {
    resetQuiz();
    navigation.dismissAll();
    navigation.replace("/(quiz)");
  };

  return (
    <View className="flex-1 p-5 bg-white">
      <ResultHeader
        score={correctAnswers}
        totalQuestions={totalQuestions}
        resultMessage={getResultMessage()}
      />

      <ScrollView className="flex-1" style={{ paddingBottom: 300 }} showsVerticalScrollIndicator={false}>
        {answeredQuestions.map((item:any, index:number) => (
          <QuestionResultItem
            key={index}
            index={index}
            question={item.question}
            selectedAnswer={item.selectedAnswer}
            correctAnswer={item.correctAnswer}
            isCorrect={item.isCorrect}
          />
        ))}
      </ScrollView>

      <ResultActions 
        onRestart={handleRestartQuiz} 
        onGoHome={handleGoHome} 
      />
    </View>
  );
};

export default ResultScreen;