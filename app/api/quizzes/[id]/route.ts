import { getQuizQuestionsById } from "@/lib/actions/getQuizQuestionById";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const quizId = Number(params.id);

    const data = await getQuizQuestionsById(quizId);

    return Response.json(data);
  } catch (error: any) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
