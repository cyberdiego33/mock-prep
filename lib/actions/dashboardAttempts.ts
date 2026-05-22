import { sql } from "@/db";
import { DashboardAttemptType, DashboardRow } from "@/lib/types/dashboardTypes";
import { formatStatus, formatDate, formatDuration } from "../services/helpers";

export async function getDashboardQuizzes(): Promise<DashboardAttemptType[]> {
  const rows = await sql<DashboardRow[]>`
    SELECT
      q.id AS quiz_id,
      q.duration_minutes,

      (
        SELECT COUNT(*)
        FROM attempts a
        WHERE a.quiz_id = q.id
      ) AS attempt_count,

      a.started_at,
      a.completed_at,
      a.status,
      a.score,
      a.total_questions

    FROM quizzes q

    LEFT JOIN LATERAL (
      SELECT *
      FROM attempts a2
      WHERE a2.quiz_id = q.id
      ORDER BY a2.started_at DESC
      LIMIT 1
    ) a ON true

    ORDER BY q.id ASC
  `;

  return rows.map((row): DashboardAttemptType => {
    const score = row.score ?? 0;

    const total = row.total_questions ?? 0;

    const percentage = total === 0 ? 0 : (score / total) * 10;

    return {
      id: row.quiz_id,

      attempt: Number(row.attempt_count),

      status: formatStatus(row.status),

      started: formatDate(row.started_at),

      completed: formatDate(row.completed_at),

      duration: formatDuration(
        row.started_at,
        row.completed_at,
        row.duration_minutes,
      ),

      mark: [score, total],

      grade: [Number(percentage.toFixed(2)), 10],
    };
  });
}
