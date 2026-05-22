import { getAllQuizzes } from "@/lib/actions/getAllQuizzes";

export async function GET() {
  try {
    const quizzes = await getAllQuizzes();

    return Response.json(quizzes);
  } catch (error: any) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
