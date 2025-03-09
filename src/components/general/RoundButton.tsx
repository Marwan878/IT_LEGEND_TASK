import { cn } from "@/lib/utils";
import { X } from "lucide-react";

function RoundButton({
  onClick,
  className,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full w-16 h-16 bg-white hover:bg-gray-200/20 border border-gray-300 shadow-md fixed right-12 top-12 sm:right-16 sm:top-16 flex items-center justify-center",
        className
      )}
    >
      <X />
    </button>
  );
}

export default RoundButton;
