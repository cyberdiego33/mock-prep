import { sql } from "@/db";

export async function POST(req: Request) {
  try {
    const { attemptId } = await req.json();

    // 1. Count correct answers
    const correctAnswers = await sql`
      SELECT COUNT(*) AS score
      FROM attempt_answers
      WHERE attempt_id = ${attemptId}
      AND is_correct = true
    `;

    const score = Number(correctAnswers[0].score);

    // 2. Get attempt start time
    const attempt = await sql`
      SELECT started_at
      FROM attempts
      WHERE id = ${attemptId}
    `;

    const startedAt = new Date(attempt[0].started_at);
    const completedAt = new Date();

    // duration in seconds
    const durationSeconds = Math.floor(
      (completedAt.getTime() - startedAt.getTime()) / 1000,
    );

    // 3. Update attempt
    await sql`
      UPDATE attempts
      SET
        score = ${score},
        status = 'finished',
        completed_at = NOW(),
        duration_seconds = ${durationSeconds}
      WHERE id = ${attemptId}
    `;

    // 4. Return final result
    return Response.json({
      success: true,
      score,
      durationSeconds,
    });
  } catch (error: any) {
    console.log("FINISH ATTEMPT ERROR:", error);

    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
