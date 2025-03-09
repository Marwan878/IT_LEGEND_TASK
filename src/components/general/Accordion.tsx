import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { createContext, CSSProperties, useContext, useState } from "react";

const AccordionContext = createContext<{
  isOpen: boolean;
  toggle: () => void;
  isDynamic: boolean;
} | null>(null);

export default function Accordion({
  className,
  children,
  style,
  isDynamic = true,
}: {
  className?: string;
  children: React.ReactNode;
  style?: CSSProperties;
  isDynamic?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((curr) => !curr);

  return (
    <AccordionContext.Provider
      value={{
        isOpen,
        toggle,
        isDynamic,
      }}
    >
      <div className={className} style={style}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionHeader({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: CSSProperties;
}) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionHeader must be used within an Accordion");
  }

  return (
    <div
      style={style}
      className={cn("flex justify-between border-y border-x p-6", className, {
        "border-b-0": context.isOpen,
        "cursor-pointer": context.isDynamic,
      })}
      onClick={context.isDynamic ? context.toggle : () => {}}
    >
      <h2 className="text-lg font-medium text-gray-700">{children}</h2>
      {context.isDynamic && (
        <span className={cn("transition-transform self-start", {})}>
          {context.isOpen ? <Minus /> : <Plus />}
        </span>
      )}
    </div>
  );
}

export function AccordionBody({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: CSSProperties;
}) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionBody must be used within an Accordion");
  }

  const { isOpen, isDynamic } = context;

  return (isOpen && isDynamic) || !isDynamic ? (
    <div className={className} style={style}>
      {children}
    </div>
  ) : null;
}
