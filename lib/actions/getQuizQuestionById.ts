import { sql } from "@/db";
import {
  QuizDetails,
  QuizQuestion,
  QuizOption,
  QuestionRow,
} from "../types/quizTypes";

export async function getQuizQuestionsById(
  quizId: number,
): Promise<QuizDetails> {
  const raw = await sql<QuestionRow[]>`
    SELECT 
      q.id AS question_id,
      q.question_number,
      q.question_text,
      o.id AS option_id,
      o.option_text
    FROM questions q
    JOIN question_options o 
      ON q.id = o.question_id
    WHERE q.quiz_id = ${quizId}
    ORDER BY q.question_number, o.id
  `;

  const map = new Map<number, QuizQuestion>();

  for (const row of raw) {
    if (!map.has(row.question_id)) {
      map.set(row.question_id, {
        id: row.question_id,
        questionNumber: row.question_number,
        questionText: row.question_text,
        options: [],
      });
    }

    const question = map.get(row.question_id)!;

    const option: QuizOption = {
      id: row.option_id,
      text: row.option_text,
    };

    question.options.push(option);
  }

  return {
    id: quizId,
    title: "", // optional now (we can improve later)
    durationMinutes: 0, // optional for now
    questions: Array.from(map.values()),
  };
}
