import { cn } from "@/lib/utils";

export default function Subheading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-[1.6875rem] font-semibold mb-4 font-spartan",
        className
      )}
    >
      {children}
    </h2>
  );
}
