import React from "react";
import { cn } from "@/lib/utils";
import { Circle, Disc, Disc2 } from "lucide-react";

interface QuizOptionProps {
  id: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  id,
  label,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "quiz-option shadow-md w-full px-4 mb-3 rounded-sm bg-white cursor-pointer flex items-center animate-scale-in z-10 relative",
        isSelected ? "selected bg-[#5d7aff] text-white" : "hover:bg-gray-50"
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "w-5 h-5 border flex items-center rounded-[3px] border-[#455cc3] justify-center me-4 transition-all duration-200",
          { "border-white": isSelected }
          // isSelected ? "bg-quiz-primary border-quiz-primary" : ""
        )}
      >
        {isSelected && <div className="bg-white w-2 h-2 rounded-full" />}
      </div>
      <span
        className={cn(
          "text-quiz-text font-medium border-s-2 border-s-gray-300 ps-4 py-4",
          { "border-s-white": isSelected }
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default QuizOption;
