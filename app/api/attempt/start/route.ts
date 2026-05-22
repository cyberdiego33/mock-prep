import { sql } from "@/db";

export async function POST(req: Request) {
  try {
    const { quizId } = await req.json();

    // 1. Create attempt
    const attempt = await sql`
      INSERT INTO attempts (
        quiz_id,
        started_at,
        status,
        score,
        total_questions
      )
      VALUES (
        ${quizId},
        NOW(),
        'in_progress',
        0,
        (CAST(
            (SELECT COUNT(*) FROM questions WHERE quiz_id = ${quizId})
        AS INTEGER))
      )
      RETURNING *
    `;

    const attemptId = attempt[0].id;

    // 2. Fetch questions + options
    const raw = await sql`
    SELECT 
        q.id as question_id,
        q.question_number,
        q.question_text,
        o.id as option_id,
        o.option_text
    FROM questions q
    JOIN question_options o ON q.id = o.question_id
    WHERE q.quiz_id = ${quizId}
    ORDER BY q.question_number
    `;

    const grouped = raw.reduce((acc: any[], row: any) => {
      let question = acc.find((q) => q.question_id === row.question_id);

      if (!question) {
        question = {
          question_id: row.question_id,
          question_number: row.question_number,
          question_text: row.question_text,
          options: [],
        };
        acc.push(question);
      }

      question.options.push({
        option_id: row.option_id,
        option_text: row.option_text,
      });

      return acc;
    }, []);

    return Response.json({
      attemptId,
      questions: grouped,
    });
  } catch (error: any) {
    console.log("START ATTEMPT ERROR:", error);

    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
