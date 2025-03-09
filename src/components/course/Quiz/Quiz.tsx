import React, { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { Timer } from "@/components/general";
import ProgressSteps from "./ProgressSteps";
import QuizCard from "./QuizCard";
import QuizNavigation from "./QuizNavigation";
import QuizResult from "./QuizResult";
import { TQuiz } from "@/types";

function Quiz({
  onClose,
  quiz,
  score,
  setScore,
}: {
  onClose: () => void;
  quiz: TQuiz;
  score: null | number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const totalQuestions = quiz.questions.length;
  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleTimeUp = () => {
    setIsTimerRunning(false);
    calculateScore();
  };

  const calculateScore = () => {
    let newScore = 0;
    quiz.questions.forEach((question) => {
      if (selectedOptions[question.id] === question.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions({});
    setIsTimerRunning(true);
    // setScore(null);
  };

  return (
    <div className="min-h-screen bg-[#455cc3] flex flex-col px-5">
      <div className="flex items-center mt-8 w-full">
        <button className="cursor-pointer" onClick={onClose}>
          <ChevronLeft size={24} color="white" className="me-auto" />
        </button>
        {score === null && (
          <Timer
            initialSeconds={quiz.durationInMinutes * 60}
            onTimeUp={handleTimeUp}
            isRunning={isTimerRunning}
          />
        )}
      </div>
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center">
          {score === null ? (
            <>
              <ProgressSteps
                totalSteps={totalQuestions}
                currentStep={currentQuestionIndex + 1}
              />
              <QuizCard
                questionNumber={currentQuestionIndex + 1}
                question={currentQuestion.question}
                options={currentQuestion.options}
                selectedOption={selectedOptions[currentQuestion.id] || null}
                onOptionSelect={handleOptionSelect}
              />
              <QuizNavigation
                onNext={handleNext}
                onPrev={handlePrev}
                canGoNext={
                  !!selectedOptions[currentQuestion.id] || !isTimerRunning
                }
                canGoPrev={currentQuestionIndex > 0}
              />
            </>
          ) : (
            <QuizResult
              score={score}
              totalQuestions={totalQuestions}
              onRestart={restartQuiz}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
