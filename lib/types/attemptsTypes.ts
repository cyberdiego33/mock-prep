import { DashboardAttemptType } from "./dashboardTypes";

export interface CreateAttemptResult {
  attemptId: number;
  startedAt: string;
}

export interface FinishAttemptPayload {
  attemptId: number;
  answers: {
    questionId: number;
    selectedOptionId: number;
  }[];
}

export interface FinishAttemptResult {
  success: boolean;
  score: number;
  totalQuestions: number;
  durationSeconds: number;
}

export interface AttemptQuestion {
  questionId: number;

  questionNo: number;

  questionText: string;

  mark: number[];

  options: {
    optionId: number;

    alpha: string;

    text: string;
  }[];

  selectedOption: string | null;

  isCorrect: boolean;
}

export interface AttemptReview {
  attempt: DashboardAttemptType;

  questions: AttemptQuestion[];
}

// export interface AttemptReview {
//   attemptId: number;
//   quizId: number;
//   status: string;
//   started: string;
//   completed: string;
//   score: number;
//   total: number;

//   questions: {
//     questionId: number;
//     questionText: string;

//     options: {
//       optionId: number;
//       text: string;
//     }[];

//     selectedOptionId: number | null;
//     isCorrect: boolean;
//   }[];
// }
