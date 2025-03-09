type TModule = {
  name: string;
  description: string;
  timeFrame: string;
  sections: TSection[];
};

type TSection = {
  name: string;
  type: TSectionType;
  src?: string;
  tags?: React.ReactNode[];
  quiz?: TQuiz;
};

type TSectionType = "pdf" | "quiz" | "video";

type TQuiz = {
  questions: TQuizQuestion[];
  durationInMinutes: number;
};

type TQuizQuestion = {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
};

type TComment = {
  id: string;
  userName: string;
  userAvatar: string;
  date: string;
  content: string;
}

export type { TModule, TSectionType, TQuiz, TSection, TComment };
