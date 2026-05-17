import { pgTable, serial, integer, text, timestamp } from "drizzle-orm/pg-core";
import { questions } from "./questions";

export const questionOptions = pgTable("question_options", {
  id: serial("id").primaryKey(),

  questionId: integer("question_id")
    .notNull()
    .references(() => questions.id),

  optionText: text("option_text").notNull(),

  createdAt: timestamp("created_at").defaultNow(),
});
