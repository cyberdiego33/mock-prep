export type QuizRow = {
  id: number;
  title: string;
  duration_minutes: number;
  attempt_count: number;
  last_status: string | null;
};

export interface QuizCard {
  id: number;
  title: string;
  durationMinutes: number;
  attempt: number | null;
  status: "available" | "finished" | "in_progress";
}

export type QuestionRow = {
  question_id: number;
  question_number: number;
  question_text: string;
  option_id: number;
  option_text: string;
};

export interface QuizOption {
  id: number;
  text: string;
}

export interface QuizQuestion {
  id: number;
  questionNumber: number;
  questionText: string;
  options: QuizOption[];
}

export interface QuizDetails {
  id: number;
  title: string;
  durationMinutes: number;
  questions: QuizQuestion[];
}
