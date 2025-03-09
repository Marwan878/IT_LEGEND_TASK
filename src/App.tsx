import {
  Comments,
  Header,
  Leaderboard,
  Materials,
  NavButtons,
  PDF,
  QuestionPopup,
  Quiz,
  Topics,
} from "@/components/course";
import { VideoPreview } from "@/components/general";
import { COMMENTS } from "@/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { TQuiz } from "@/types";
import {
  Book,
  ChartNoAxesColumnIncreasing,
  FileQuestion,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";


/**
 * Main application component that manages the state and rendering of different sections
 * of a course, including video previews, materials, topics, comments, and various popups
 * such as PDF, leaderboard, and quiz.
 *
 * State management includes:
 * - `pdfIsOpen`: toggles the visibility of the PDF viewer.
 * - `leaderboardIsOpen`: toggles the visibility of the leaderboard popup.
 * - `questionModalIsOpen`: toggles the visibility of the question modal popup.
 * - `quizIsOpen`: toggles the visibility of the quiz popup.
 * - `quiz`: holds the current quiz data.
 * - `question`: holds the current question text.
 * - `videoUrl`: stores the URL of the video to be displayed.
 * - `videoIsExpanded`: toggles the expanded view of the video.
 * - `quizScore`: holds the score of the current quiz.
 *
 * The component conditionally renders different popups based on state, and displays
 * the main course content including video previews, navigation buttons, and sections
 * like materials, topics, and comments.
 */
const App = () => {
  const isMobile = useIsMobile();

  const [pdfIsOpen, setPdfIsOpen] = useState(false);
  const [leaderboardIsOpen, setLeaderboardIsOpen] = useState(false);
  const [questionModalIsOpen, setQuestionModalIsOpen] = useState(false);
  const [quizIsOpen, setQuizIsOpen] = useState(false);
  const [quiz, setQuiz] = useState<TQuiz | null>(null);
  const [question, setQuestion] = useState("");
  const [videoUrl, setVideoUrl] = useState("/test.mov");
  const [videoIsExpanded, setVideoIsExpanded] = useState(false);

  const [quizScore, setQuizScore] = useState<null | number>(null);

  const SECTIONS = [
    { name: "curriculum", icon: <Book />, href: "#curriculum" },
    {
      name: "leaderboard",
      icon: <ChartNoAxesColumnIncreasing />,
      onClick: () => setLeaderboardIsOpen(true),
    },
    {
      name: "ask-a-question",
      icon: <FileQuestion />,
      onClick: () => setQuestionModalIsOpen(true),
    },
    { name: "comments", icon: <MessageCircle />, href: "#comments" },
  ] as const;

  if (pdfIsOpen) {
    return <PDF src="/test.pdf" setPdfIsOpen={setPdfIsOpen} />;
  }

  if (leaderboardIsOpen) {
    return (
      <Leaderboard
        courseName="Course Name"
        studentBeats={100}
        data={Array.from({ length: 5 })}
        setLeaderboardIsOpen={setLeaderboardIsOpen}
      />
    );
  }

  if (questionModalIsOpen) {
    return (
      <QuestionPopup
        onClose={() => setQuestionModalIsOpen(false)}
        question={question}
        setQuestion={setQuestion}
      />
    );
  }

  if (quizIsOpen) {
    return <Quiz quiz={quiz} score={quizScore} setScore={setQuizScore} onClose={() => setQuizIsOpen(false)} />;
  }

  return (
    <>
      <Header />
      <div className={cn("min-h-screen")}>
        <div className="page-container py-4 md:py-6">
          {isMobile && <VideoPreview src={videoUrl} />}
          <main className="fade-up">
            <div
              className={cn(
                "grid grid-areas-mobile xl:grid-areas-desktop gap-6 xl:gap-x-12",
                { "xl:grid-areas-expanded": !isMobile && videoIsExpanded }
              )}
            >
              <div className="area-video">
                {!isMobile && (
                  <VideoPreview
                    src={videoUrl}
                    setVideoIsExpanded={setVideoIsExpanded}
                  />
                )}
                <NavButtons sections={SECTIONS} />
              </div>
              <Materials />
              <Topics
                setQuiz={setQuiz}
                setPdfIsOpen={setPdfIsOpen}
                setQuizIsOpen={setQuizIsOpen}
              />
              <Comments
                className={!isMobile && videoIsExpanded ? "mt-[-26rem]" : ""}
                showFirst={isMobile ? 2 : 3}
                comments={COMMENTS}
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
