export function formatDate(date: Date | null): string {
  if (!date) return "Not started";

  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

export function formatDuration(
  started: Date | null,
  completed: Date | null,
  quizDuration: number,
) {
  if (!started || !completed) {
    return `${quizDuration} minutes`;
  }

  const seconds = (completed.getTime() - started.getTime()) / 1000;

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins} mins ${secs} secs`;
}

export function formatStatus(status: string | null): string {
  if (!status) return "Available";

  switch (status) {
    case "in_progress":
      return "In Progress";

    case "finished":
      return "Finished";

    case "available":
      return "Available";

    default:
      return "Available";
  }
}
