"use client";

import { useState } from "react";
import { QuestionsList } from "@/app/components/QuestionInterface"; // Dummy data
import QuestionComponent from "./QuestionComponent";
import QuizBtn from "./QuizBtn";

const QuestionStepper = () => {
  // 1. Track which question we are on
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  // For saving the answers
  const handleAnswerChange = (questionId: number, alpha: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: alpha,
    }));
  };

  // 2. Get the specific question from your list
  const currentQuestion = QuestionsList[currentIndex];
  const isLastQuestion = currentIndex === QuestionsList.length - 1;

  const nextQuestion = () => {
    if (currentIndex < QuestionsList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = function () {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  // For your final "Submit" logic:
  const submitFunction = () => {
    const finalResults = QuestionsList.map((q) => ({
      id: q.questionId,
      questionNo: q.questionNo,
      optionpicked: answers[q.questionId] || null,
    }));
    console.log(finalResults);
  };

  return (
    <div className="p-3 border border-border rounded-sm">
      <ul className="border-b border-border">
        <QuestionComponent
          quest={currentQuestion}
          i={1}
          isDisabled={false}
          selectedOption={answers[currentQuestion.questionId] || ""}
          onAnswerChange={handleAnswerChange}
        />
      </ul>
      <div className="flex justify-between items-center p-2">
        {currentIndex === 0 ? (
          <QuizBtn onClick={nextQuestion}>Next Question</QuizBtn>
        ) : (
          <>
            <QuizBtn onClick={prevQuestion}>Previous Question</QuizBtn>
            {isLastQuestion ? (
              <QuizBtn onClick={submitFunction}>Finish quiz</QuizBtn>
            ) : (
              <QuizBtn onClick={nextQuestion}>Next Question</QuizBtn>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionStepper;
