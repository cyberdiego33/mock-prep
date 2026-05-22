export type DashboardRow = {
  quiz_id: number;

  duration_minutes: number;

  attempt_count: string;

  started_at: Date | null;

  completed_at: Date | null;

  status: string | null;

  score: number | null;

  total_questions: number | null;
};

export interface DashboardAttemptType {
  id: number; // Quiz Id
  attempt: number; // How many attempts or 0
  status: string; // Available / Finished
  started: string; // the start date of the last attempt
  completed: string; // the end date of the last attempt
  duration: string; // how long it took to complete or if not attempted then the quiz duration
  mark: number[]; // how many marks of the last attempt / total mark or if not attempted 0 / total mark
  grade: number[]; // same thing with mark but percentage based / 10.00
}
