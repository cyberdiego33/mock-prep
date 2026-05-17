import {
  pgTable,
  serial,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { attempts } from "./attempts";
import { questions } from "./questions";
import { questionOptions } from "./options";

export const attemptAnswers = pgTable("attempt_answers", {
  id: serial("id").primaryKey(),

  attemptId: integer("attempt_id")
    .notNull()
    .references(() => attempts.id),

  questionId: integer("question_id")
    .notNull()
    .references(() => questions.id),

  selectedOptionId: integer("selected_option_id")
    .notNull()
    .references(() => questionOptions.id),

  isCorrect: boolean("is_correct").notNull(),

  answeredAt: timestamp("answered_at").defaultNow(),
});
