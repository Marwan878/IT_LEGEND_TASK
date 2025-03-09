import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Timer as TimerIcon } from "lucide-react";

interface TimerProps {
  initialSeconds: number;
  onTimeUp: () => void;
  isRunning: boolean;
}

const Timer: React.FC<TimerProps> = ({
  initialSeconds,
  onTimeUp,
  isRunning,
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(interval);
            onTimeUp();
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, seconds, onTimeUp]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  return (
    <div className="mx-auto px-5 py-2 bg-[#fbd500] shadow-[0px_9px_45px_-5px_rgba(251,211,0,0.75)] rounded-sm  inline-flex items-center text-white">
      <TimerIcon size={18} className="mr-2" />
      <span className="font-light">{formatTime(seconds)}</span>
      {isRunning && (
        <div className="relative mt-1">
          <div className="absolute top-0 left-0 h-1 bg-quiz-primary w-full rounded-full opacity-0"></div>
          <div className="animate-countdown h-1 bg-quiz-primary rounded-full opacity-0"></div>
        </div>
      )}
    </div>
  );
};

export default Timer;
