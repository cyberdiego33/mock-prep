import { sql } from "@/db";
import { QuizCard, QuizRow } from "../types/quizTypes";

export async function getAllQuizzes(): Promise<QuizCard[]> {
  const quizzes = await sql<QuizRow[]>`
    SELECT 
      q.id,
      q.title,
      q.duration_minutes,
      (
        SELECT COUNT(*) 
        FROM attempts a 
        WHERE a.quiz_id = q.id
      ) AS attempt_count,
      (
        SELECT status 
        FROM attempts a 
        WHERE a.quiz_id = q.id 
        ORDER BY a.started_at DESC 
        LIMIT 1
      ) AS last_status
    FROM quizzes q
    ORDER BY q.id ASC
  `;

  return quizzes.map(
    (quiz): QuizCard => ({
      id: quiz.id,
      title: quiz.title,
      durationMinutes: quiz.duration_minutes,
      attempt: quiz.attempt_count,
      status: (quiz.last_status as QuizCard["status"]) ?? "available",
    }),
  );
}
