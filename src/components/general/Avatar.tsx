import React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  className,
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <div
      className={cn(
        "rounded-full overflow-hidden border border-border flex-shrink-0",
        sizeClasses[size],
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to initials if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            parent.classList.add("bg-muted");
            parent.innerHTML = alt
              .split(" ")
              .map((word) => word[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();
            parent.style.display = "flex";
            parent.style.alignItems = "center";
            parent.style.justifyContent = "center";
            parent.style.color = "var(--muted-foreground)";
            parent.style.fontWeight = "500";
          }
        }}
      />
    </div>
  );
};

export default Avatar;
