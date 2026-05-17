import { pgTable, serial, integer, text, timestamp } from "drizzle-orm/pg-core";
import { quizzes } from "./quizzes";
import { questionOptions } from "./options";

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  quizId: integer("quiz_id")
    .notNull()
    .references(() => quizzes.id),

  questionNumber: integer("question_number").notNull(),
  questionText: text("question_text").notNull(),

  // correctOptionIndex: integer("correct_option_index").notNull(),
  correctOptionId: integer("correct_option_id"),

  createdAt: timestamp("created_at").defaultNow(),
});
