import React from "react";
import { Award, RefreshCw } from "lucide-react";

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  const percentage = (score / totalQuestions) * 100;

  let message = "Try again!";
  if (percentage >= 80) {
    message = "Excellent!";
  } else if (percentage >= 60) {
    message = "Good job!";
  } else if (percentage >= 40) {
    message = "Not bad!";
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full animate-scale-in">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-quiz-light rounded-full flex items-center justify-center">
          <Award size={32} className="text-quiz-primary" />
        </div>
        <h2 className="text-2xl font-bold text-quiz-text mb-2">{message}</h2>
        <p className="text-quiz-secondary mb-6">
          You scored {score} out of {totalQuestions}
        </p>
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 text-white py-3 px-6 rounded-lg font-medium bg-blue-600 transition-colors"
        >
          <RefreshCw size={16} />
          Try Again
        </button>
      </div>
    </div>
  );
};

export default QuizResult;
