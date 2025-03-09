import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface QuizNavigationProps {
  onNext: () => void;
  onPrev: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({
  onNext,
  onPrev,
  canGoNext,
  canGoPrev,
}) => {
  return (
    <div className="flex justify-between items-center mt-6 px-2">
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
          canGoPrev
            ? "bg-white/10 hover:bg-white/20 text-white"
            : "opacity-30 cursor-not-allowed bg-white/5 text-white/50"
        }`}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
          canGoNext
            ? "bg-white/10 hover:bg-white/20 text-white"
            : "opacity-30 cursor-not-allowed bg-white/5 text-white/50"
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default QuizNavigation;
