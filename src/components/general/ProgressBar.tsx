import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

function ProgressBar({
  progress: maxProgress,
  className,
}: {
  progress: number;
  className: string;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(maxProgress);
        }
      },
      { threshold: 0.5 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div
      className={cn("relative bg-gray-200 rounded-full h-2", className)}
      ref={targetRef}
    >
      <div
        className="rounded-full absolute bottom-[calc(100%+15px)] -translate-x-1/2 transition-all duration-500"
        style={{ left: `${progress}%` }}
      >
        <div className="flex items-center justify-between text-[#485293] font-semibold border-2 border-[#c8c8c8] rounded-full relative p-1 w-10 h-10 text-xs">
          <span className="mx-auto">You</span>
          <div className="absolute border-4 border-transparent border-t-[#c8c8c8] left-1/2 -translate-x-1/2 top-[calc(100%+5px)]"></div>
        </div>
      </div>
      <div
        className="absolute h-2 top-0 bg-green-500 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
      <div
        className="text-[#485293] font-semibold text-xs absolute top-[calc(100%+15px)] -translate-x-1/2 transition-all duration-500"
        style={{ left: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
}

export default ProgressBar;
