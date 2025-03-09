import { ArrowRight, HelpCircle, X } from "lucide-react";

interface QuestionPopupProps {
  onClose: () => void;
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
}

const QuestionPopup: React.FC<QuestionPopupProps> = ({
  onClose,
  question,
  setQuestion,
}) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!question.trim()) {
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Question submitted:", { name, question });

    // Reset form and close popup
    setQuestion("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000] p-4">
      <div
        className="bg-white rounded-xl shadow-lg w-full max-w-md animate-fade-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <HelpCircle className="h-5 w-5 text-teal-500" />
            <h3 className="text-lg font-semibold text-gray-800">
              Ask a Question
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="question"
                className="block text-sm font-medium text-gray-700 mb-4"
              >
                Your Question*
              </label>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none min-h-[120px]"
                placeholder="Type your question here..."
                required
                style={{ resize: "none" }}
              />
            </div>

            <div className="flex justify-start">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
              >
                Submit Question
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionPopup;
