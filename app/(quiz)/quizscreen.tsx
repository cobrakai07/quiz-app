import { View, Text, BackHandler } from "react-native";
import React, { useState, useCallback } from "react";
import { useQuiz } from "../../contexts/QuizContext";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import QuizHeader from "@/components/ui/quizpage/QuizHeader";
import QuizOption from "@/components/ui/quizpage/QuizOption";
import QuizButton from "@/components/ui/quizpage/QuizButton";
import QuizImage from "@/components/ui/quizpage/QuizImage";

const QuizScreen = () => {
  const {
    selectedQuiz,
    questionIndex,
    answeredQuestions,
    setSelectedOption,
    selectedOption,
    setCorrectAnswers,
    correctAnswers,
    nextQuestion,
    setAnsweredQuestions,
  } = useQuiz();
  const navigation = useRouter();

  const currentQuestion = selectedQuiz?.questions[questionIndex];
  const [isAnswered, setIsAnswered] = useState(false);
  const [imageType, setImageType] = useState("think");

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => true;
      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  if (!selectedQuiz) {
    return <Text className="text-center text-lg">No quiz selected.</Text>;
  }

  const handleSelectOption = (index: number) => {
    if (!isAnswered) {
      setSelectedOption(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setAnsweredQuestions([
      ...answeredQuestions,
      {
        question: currentQuestion.question,
        selectedAnswer: currentQuestion.options[selectedOption],
        correctAnswer: currentQuestion.options[currentQuestion.correctAnswer],
        isCorrect,
      },
    ]);
    
    if (isCorrect) {
      setImageType("correct");
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setImageType("learn");
    }
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    setImageType("think");
    if (!selectedQuiz?.questions || selectedQuiz.questions.length === 0) {
      console.log("No questions available.");
      return;
    }

    if (questionIndex + 1 < selectedQuiz.questions.length) {
      setSelectedOption(null);
      setIsAnswered(false);
      nextQuestion();
    } else {
      navigation.dismissAll();
      navigation.push("/(quiz)/resultscreen");
    }
  };

  return (
    <View className="flex-1 p-5 bg-white">
      <QuizHeader
        currentQuestion={questionIndex + 1}
        totalQuestions={selectedQuiz.questions.length}
        questionText={currentQuestion?.question}
      />

      {currentQuestion?.options.map((option: any, index: number) => (
        <QuizOption
          key={index}
          option={option}
          index={index}
          isAnswered={isAnswered}
          isCorrect={index === currentQuestion.correctAnswer}
          isSelected={selectedOption === index}
          onSelect={handleSelectOption}
        />
      ))}

      {!isAnswered ? (
        <QuizButton
          title="Check Answer"
          onPress={handleSubmitAnswer}
          disabled={selectedOption === null}
        />
      ) : (
        <QuizButton
          title={
            questionIndex + 1 < selectedQuiz.questions.length
              ? "Next"
              : "Finish Quiz"
          }
          onPress={handleNextQuestion}
          variant="success"
        />
      )}

      <View className="flex-1 flex-row justify-center items-center bg-white p-32">
        <QuizImage type={imageType} />
      </View>
    </View>
  );
};

export default QuizScreen;