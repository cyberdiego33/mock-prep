import { sql } from "@/db";
import { AttemptReview } from "../types/attemptsTypes";
import { formatDate, formatStatus } from "../services/helpers";

// export async function getAttemptById(
//   attemptId: number,
// ): Promise<AttemptReview> {
//   // 1. Get attempt info
//   const attemptRows = await sql`
//     SELECT *
//     FROM attempts
//     WHERE id = ${2}
//     LIMIT 1
//   `;

//   const attempt = attemptRows[0];

//   if (!attempt) {
//     throw new Error("Attempt not found");
//   }

//   const quizId = attempt.quiz_id;

//   // 2. Get questions + options
//   const rawQuestions = await sql`
//     SELECT
//       q.id AS question_id,
//       q.question_text,
//       o.id AS option_id,
//       o.option_text
//     FROM questions q
//     JOIN question_options o ON q.id = o.question_id
//     WHERE q.quiz_id = ${quizId}
//     ORDER BY q.question_number, o.id
//   `;

//   // 3. Get user answers
//   const answers = await sql`
//     SELECT *
//     FROM attempt_answers
//     WHERE attempt_id = ${attemptId}
//   `;

//   const answerMap = new Map<number, any>();

//   for (const a of answers) {
//     answerMap.set(a.question_id, a);
//   }

//   // 4. Build grouped questions
//   const map = new Map<number, any>();

//   for (const row of rawQuestions) {
//     if (!map.has(row.question_id)) {
//       map.set(row.question_id, {
//         questionId: row.question_id,
//         questionText: row.question_text,
//         options: [],
//       });
//     }

//     map.get(row.question_id).options.push({
//       optionId: row.option_id,
//       text: row.option_text,
//     });
//   }

//   // 5. Merge answers
//   const questions = Array.from(map.values()).map((q) => {
//     const answer = answerMap.get(q.questionId);

//     return {
//       ...q,
//       selectedOptionId: answer?.option_id ?? null,
//       isCorrect: answer?.is_correct ?? false,
//     };
//   });

//   // 6. Return final structure
//   return {
//     attemptId: attempt.id,
//     quizId: attempt.quiz_id,
//     status: formatStatus(attempt.status),
//     started: formatDate(attempt.started_at),
//     completed: formatDate(attempt.completed_at),
//     score: attempt.score,
//     total: attempt.total_questions,
//     questions,
//   };
// }

export async function getAttemptById(
  attemptId: number,
): Promise<AttemptReview> {
  // 1. Get attempt info
  const attemptRows = await sql`
    SELECT *
    FROM attempts
    WHERE id = ${2}
    LIMIT 1
  `;

  const attempt = attemptRows[0];

  if (!attempt) {
    throw new Error("Attempt not found");
  }

  const quizId = attempt.quiz_id;

  // 2. Count total attempts for this quiz
  const totalAttemptsResult = await sql`
    SELECT COUNT(*)::int AS total
    FROM attempts
    WHERE quiz_id = ${quizId}
  `;

  const totalAttempts = totalAttemptsResult[0].total;

  // 3. Get questions + options
  const rawQuestions = await sql`
    SELECT 
      q.id AS question_id,
      q.question_number,
      q.question_text,
      q.mark,

      o.id AS option_id,
      o.option_text

    FROM questions q

    JOIN question_options o
      ON q.id = o.question_id

    WHERE q.quiz_id = ${quizId}

    ORDER BY q.question_number, o.id
  `;

  // 4. Get user answers
  const answers = await sql`
    SELECT *
    FROM attempt_answers
    WHERE attempt_id = ${attemptId}
  `;

  const answerMap = new Map<number, any>();

  for (const answer of answers) {
    answerMap.set(answer.question_id, answer);
  }

  // 5. Group questions
  const map = new Map<number, any>();

  for (const row of rawQuestions) {
    const alphabets = ["a", "b", "c", "d", "e", "f"];

    if (!map.has(row.question_id)) {
      map.set(row.question_id, {
        questionId: row.question_id,

        questionNo: row.question_number,

        questionText: row.question_text,

        mark: [Number(row.mark), Number(row.mark)],

        options: [],
      });
    }

    //     map.get(row.question_id).options.push({
    //   optionId: row.option_id,
    //   text: row.option_text,
    // });
    const currentQuestion = map.get(row.question_id);

    const optionIndex = currentQuestion.options.length;

    currentQuestion.options.push({
      optionId: row.option_id,

      alpha: alphabets[optionIndex],

      text: row.option_text,
    });
  }

  // 6. Merge answers into questions
  const questions = Array.from(map.values()).map((question) => {
    const answer = answerMap.get(question.questionId);

    return {
      ...question,

      selectedOption:
        question.options.find((opt: any) => opt.optionId === answer?.option_id)
          ?.alpha ?? null,

      isCorrect: answer?.is_correct ?? false,
    };
  });

  // 7. Build marks + grade
  const mark = [Number(attempt.score), Number(attempt.total_questions)];

  const percentage =
    Number(attempt.total_questions) === 0
      ? 0
      : (Number(attempt.score) / Number(attempt.total_questions)) * 100;

  const grade = [percentage, 100];

  // 8. Return final UI-ready structure
  return {
    attempt: {
      id: attempt.id,

      attempt: totalAttempts,

      status: formatStatus(attempt.status),

      started: formatDate(attempt.started_at),

      completed: attempt.completed_at
        ? formatDate(attempt.completed_at)
        : "Not completed",

      duration: "5 mins",

      mark,

      grade,
    },

    questions,
  };
}
