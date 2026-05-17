import { sql } from "@/db";

export async function GET() {
  try {
    const result = await sql`SELECT 1 as connected`;

    return Response.json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
