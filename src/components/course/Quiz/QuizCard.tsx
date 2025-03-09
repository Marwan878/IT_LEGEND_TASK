import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import QuizOption from "./QuizOption";

interface Option {
  id: string;
  text: string;
}

interface QuizCardProps {
  questionNumber: number;
  question: string;
  options: Option[];
  selectedOption: string | null;
  onOptionSelect: (optionId: string) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  questionNumber,
  question,
  options,
  selectedOption,
  onOptionSelect,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [questionNumber]);

  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 shadow-lg max-w-md w-full transition-all duration-300 relative z-0",
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-4"
      )}
    >
      <div className="mb-5">
        <p className="text-xl font-semibold mb-2">{questionNumber}.</p>
        <h2 className="text-xl font-semibold mb-5">{question}</h2>
        <div className="space-y-2 relative z-10">
          {options.map((option, index) => (
            <div
              key={option.id}
              style={{ animationDelay: `${150 + index * 75}ms` }}
              className="animate-slide-up relative z-20"
            >
              <QuizOption
                id={option.id}
                label={option.text}
                isSelected={selectedOption === option.id}
                onClick={() => onOptionSelect(option.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
