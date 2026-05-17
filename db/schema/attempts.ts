import {
  pgTable,
  serial,
  integer,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { quizzes } from "./quizzes";

export const attempts = pgTable("attempts", {
  id: serial("id").primaryKey(),

  quizId: integer("quiz_id")
    .notNull()
    .references(() => quizzes.id),

  startedAt: timestamp("started_at").notNull(),
  completedAt: timestamp("completed_at"),

  durationSeconds: integer("duration_seconds"),

  score: integer("score").default(0).notNull(),
  totalQuestions: integer("total_questions").notNull(),

  status: varchar("status", { length: 50 }).notNull(), // in_progress | completed

  createdAt: timestamp("created_at").defaultNow(),
});
