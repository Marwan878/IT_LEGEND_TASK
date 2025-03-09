import Tag from "@/components/general/Tag";
import { TModule } from "@/types";
import {
  Clock,
  Globe,
  LibraryBig,
  UserRound,
  UserRoundCheck,
} from "lucide-react";

const MATERIALS = [
  {
    name: "instructor",
    icon: <UserRound />,
    data: "Edward Norton",
  },
  {
    name: "duration",
    icon: <Clock />,
    data: "3 weeks",
  },
  {
    name: "lessons",
    icon: <LibraryBig />,
    data: "8",
  },
  {
    name: "enrolled",
    icon: <UserRoundCheck />,
    data: "65 students",
  },
  {
    name: "language",
    icon: <Globe />,
    data: "English",
  },
] as const;

const MODULES: TModule[] = [
  {
    name: "Course Introduction",
    timeFrame: "Week 1-4",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    sections: [
      {
        name: "Introduction",
        type: "video",
        src: "/test.mov",
      },
      {
        name: "PDF",
        type: "pdf",
        src: "/test.pdf",
      },
      {
        name: "QUIZ",
        tags: [
          <Tag color="green">5 questions</Tag>,
          <Tag color="red">5 minutes</Tag>,
        ],
        type: "quiz",
        quiz: {
          durationInMinutes: 0.3,
          questions: [
            {
              id: "q1",
              question:
                "Among the following states of India, which one has the oldest rock formations in the country?",
              options: [
                { id: "a", text: "Assam" },
                { id: "b", text: "Bihar" },
                { id: "c", text: "Karnataka" },
                { id: "d", text: "Uttar Pradesh" },
              ],
              correctAnswer: "b",
            },
            {
              id: "q2",
              question: "Which planet has the most moons in our solar system?",
              options: [
                { id: "a", text: "Jupiter" },
                { id: "b", text: "Saturn" },
                { id: "c", text: "Uranus" },
                { id: "d", text: "Neptune" },
              ],
              correctAnswer: "b",
            },
            {
              id: "q3",
              question: "What is the main component of the Earth's atmosphere?",
              options: [
                { id: "a", text: "Oxygen" },
                { id: "b", text: "Carbon Dioxide" },
                { id: "c", text: "Nitrogen" },
                { id: "d", text: "Hydrogen" },
              ],
              correctAnswer: "c",
            },
            {
              id: "q4",
              question: "Who wrote the play 'Romeo and Juliet'?",
              options: [
                { id: "a", text: "Charles Dickens" },
                { id: "b", text: "William Shakespeare" },
                { id: "c", text: "Jane Austen" },
                { id: "d", text: "Mark Twain" },
              ],
              correctAnswer: "b",
            },
            {
              id: "q5",
              question: "Which is the largest ocean on Earth?",
              options: [
                { id: "a", text: "Atlantic Ocean" },
                { id: "b", text: "Indian Ocean" },
                { id: "c", text: "Arctic Ocean" },
                { id: "d", text: "Pacific Ocean" },
              ],
              correctAnswer: "d",
            },
          ],
        },
      },
      {
        name: "Course Exercise / Reference Files",
        type: "video",
      },
      {
        name: "Code Editor Installation (Optional if you have one)",
        type: "video",
      },
      {
        name: "Embedding PHP in HTML",
        type: "video",
      },
    ],
  },
  {
    name: "JavaScript Language Basics",
    timeFrame: "Week 5-8",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    sections: [
      {
        name: "Defining Functions",
        type: "video",
      },
      {
        name: "Function Parameters",
        type: "video",
      },
      {
        name: "Return Values From Functions",
        tags: [
          <Tag color="green">2 question</Tag>,
          <Tag color="red">15 minutes</Tag>,
        ],
        type: "video",
      },
      {
        name: "Global Variable and Scope",
        type: "video",
      },
      {
        name: "Newer Way of Creating a Constant",
        type: "video",
      },
      {
        name: "Constants",
        type: "video",
      },
    ],
  },
  {
    name: "Components & Databinding",
    timeFrame: "Week 5-8",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    sections: [
      {
        name: "Defining Functions",
        type: "video",
      },
      {
        name: "Function Parameters",
        type: "video",
      },
      {
        name: "Return Values From Functions",
        tags: [
          <Tag color="green">2 question</Tag>,
          <Tag color="red">15 minutes</Tag>,
        ],
        type: "video",
      },
      {
        name: "Global Variable and Scope",
        type: "video",
      },
      {
        name: "Newer Way of Creating a Constant",
        type: "video",
      },
      {
        name: "Constants",
        type: "video",
      },
    ],
  },
] as const;

const COMMENTS = [
  {
    id: "1",
    userName: "Student Name Goes Here",
    userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "Oct 10, 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    userName: "Student Name Goes Here",
    userAvatar: "https://randomuser.me/api/portraits/men/67.jpg",
    date: "Oct 15, 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    userName: "Student Name Goes Here",
    userAvatar: "https://randomuser.me/api/portraits/men/12.jpg",
    date: "Oct 19, 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
] as const;

export { MATERIALS, MODULES, COMMENTS };
