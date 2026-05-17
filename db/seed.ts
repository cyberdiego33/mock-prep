import "dotenv/config";

import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";

import { quizzes } from "./schema/quizzes";
import { questions } from "./schema/questions";
import { questionOptions } from "./schema/options";

const sql = postgres(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function seed() {
  // =========================
  // QUIZ 1
  // =========================

  const [quiz1] = await db
    .insert(quizzes)
    .values({
      title: "Mock Test 1",
      durationMinutes: 5,
    })
    .returning();

  // Question 1
  const [q1] = await db
    .insert(questions)
    .values({
      quizId: quiz1.id,
      questionNumber: 1,
      questionText:
        "Seyi, during a half-price sale, bought a book for the usual price and a second book for one-half the usual price. If she paid 90 kobo for the 2 books, what was the usual price for a book",
    })
    .returning();

  const q1Options = await db
    .insert(questionOptions)
    .values([
      { questionId: q1.id, optionText: "60k" },
      { questionId: q1.id, optionText: "40k" },
      { questionId: q1.id, optionText: "50k" },
      { questionId: q1.id, optionText: "80k" },
      { questionId: q1.id, optionText: "70k" },
    ])
    .returning();

  await db
    .update(questions)
    .set({
      correctOptionId: q1Options[0].id,
    })
    .where(eq(questions.id, q1.id));

  console.log("Quiz 1 seeded");

  // =========================
  // QUIZ 2
  // =========================

  const [quiz2] = await db
    .insert(quizzes)
    .values({
      title: "Mock Test 2",
      durationMinutes: 5,
    })
    .returning();

  // Question 1
  const [q2] = await db
    .insert(questions)
    .values({
      quizId: quiz2.id,
      questionNumber: 1,
      questionText:
        "Each question consist of two words which have a certain relationship to each other followed by four pairs of related words. CORPOREAL : SPIRITUAL",
    })
    .returning();

  const q2Options = await db
    .insert(questionOptions)
    .values([
      { questionId: q2.id, optionText: "mesa : plateau" },
      { questionId: q2.id, optionText: "foreigner : immigrant" },
      { questionId: q2.id, optionText: "pedagogue : teacher" },
      { questionId: q2.id, optionText: "moron : savant" },
    ])
    .returning();

  await db
    .update(questions)
    .set({
      correctOptionId: q2Options[3].id,
    })
    .where(eq(questions.id, q2.id));

  console.log("Quiz 2 seeded");

  console.log("Database seeded successfully");
}

seed();
