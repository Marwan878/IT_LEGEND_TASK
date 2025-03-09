import React from "react";
import { cn } from "@/lib/utils";

interface ProgressStepsProps {
  totalSteps: number;
  currentStep: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({
  totalSteps,
  currentStep,
}) => {
  return (
    <div className="flex justify-center space-x-3 mb-6">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "progress-step w-10 h-10 rounded-full border border-white flex items-center justify-center text-sm font-medium",
            currentStep === index + 1
              ? "active bg-quiz-primary bg-white text-[#455cc3]"
              : "text-white"
          )}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
