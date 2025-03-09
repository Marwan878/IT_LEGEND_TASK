import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Subheading,
  ProgressBar,
} from "@/components/general";

import { MODULES } from "@/constants/index";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { TQuiz, TSection } from "@/types";

import { FileText, Lock } from "lucide-react";

function Topics({
  setPdfIsOpen,
  setQuizIsOpen,
  setQuiz,
  className,
}: {
  className?: string;
  setQuizIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setQuiz: React.Dispatch<React.SetStateAction<TQuiz | null>>;
  setPdfIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const isMobile = useIsMobile();

  const handleSectionClick = (section: TSection) => {
    if (section.type === "pdf") {
      setPdfIsOpen(true);
    } else if (section.type === "quiz") {
      setQuiz(section.quiz);
      setQuizIsOpen(true);
    }
  }

  return (
    <div className={cn("area-topics", className)}>
      <Subheading className="mb-16">Topics for This Course</Subheading>
      <ProgressBar className="mb-16" progress={63} />
      {MODULES.map((module) => (
        <Accordion
          isDynamic={isMobile}
          key={module.name}
          className="rounded-[4px] overflow-hidden bg-white mt-8"
        >
          <AccordionHeader>{module.name}</AccordionHeader>
          <AccordionBody className="border">
            {module.sections.map((section, i) => (
              <div
                key={i}
                onClick={() => handleSectionClick(section)}
                className="flex items-center justify-between p-4 ps-6 border-t cursor-pointer border-gray-200"
              >
                <div className="gap-3 text-gray-800">
                  <FileText className="h-5 w-5 float-left me-2 text-gray-400" />{" "}
                  {section.name}
                </div>
                {section.tags?.length > 0 ? (
                  <div className="space-y-1 flex items-end flex-col">
                    {section.tags}
                  </div>
                ) : (
                  <Lock className="h-5 w-5 text-gray-400" />
                )}
              </div>
            ))}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}

export default Topics;
