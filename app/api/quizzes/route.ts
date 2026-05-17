import { sql } from "@/db";

export async function GET() {
  try {
    const quizzes = await sql`
      SELECT 
        q.id,
        q.title,
        q.duration_minutes,

        a.id AS attempt_id,
        a.score,
        a.status,
        a.started_at,
        a.completed_at,
        a.duration_seconds

      FROM quizzes q
      LEFT JOIN LATERAL (
        SELECT *
        FROM attempts a
        WHERE a.quiz_id = q.id
        ORDER BY a.created_at DESC
        LIMIT 1
      ) a ON true
      ORDER BY q.id;
    `;

    const formatted = quizzes.map((quiz) => ({
      id: quiz.id,
      title: quiz.title,
      durationMinutes: quiz.duration_minutes,

      attempt:
        quiz.attempt_id === null
          ? null
          : {
              id: quiz.attempt_id,
              score: quiz.score,
              status: quiz.status,
              startedAt: quiz.started_at,
              completedAt: quiz.completed_at,
              durationSeconds: quiz.duration_seconds,
            },

      status: quiz.attempt_id ? "attempted" : "available",
    }));

    return Response.json(formatted);
  } catch (error: any) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
