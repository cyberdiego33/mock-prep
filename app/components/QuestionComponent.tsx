"use client";

import { QuestionItem } from "./QuestionInterface";

const QuestionComponent = function ({
  quest,
  i,
  isDisabled,
  selectedOption,
  onAnswerChange,
}: {
  quest: QuestionItem;
  i: number;
  isDisabled: boolean;
  selectedOption: string;
  onAnswerChange?: (id: number, alpha: string) => void;
}) {
  return (
    <li key={i}>
      <div className="space-y-3">
        <div className="py-3 flex justify-between items-center border-b border-border">
          <p className="text-xl font-bold">
            Question <span>{quest.questionNo}</span>
          </p>
          <div className="bg-complete-status/40 px-2 py-1 rounded-sm">
            <span className="font-semibold text-sm">completed</span>
          </div>
          <div className="bg-back-btn-primary/40 px-2 py-1 rounded-sm">
            <p className="font-semibold">
              Mark <span>{quest.mark[0]}</span> out of{" "}
              <span>{quest.mark[1]}</span>{" "}
            </p>
          </div>
        </div>

        <div
          className={`py-2 px-3 pb-4 rounded-sm space-y-3 bg-question-primary`}
        >
          <p>{quest.questionText}</p>

          <ul className="pl-4 space-x-3">
            {quest.options.map((option, o) => {
              return (
                <li key={o}>
                  <label className="flex items-center space-x-3 w-fit p-2 cursor-pointer">
                    <input
                      disabled={isDisabled}
                      type="radio"
                      // Crucial: unique name per question ID
                      name={`question-${quest.questionId}`}
                      value={option.alpha}
                      // Check if this option matches what is in state
                      checked={selectedOption === option.alpha}
                      onChange={() =>
                        onAnswerChange?.(quest.questionId, option.alpha)
                      }
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{option.alpha}</span>
                    <span className="text-gray-700">{option.text}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default QuestionComponent;
