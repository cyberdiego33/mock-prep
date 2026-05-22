import { getQuizAttempts } from "@/lib/services/getAPIs";
import QuizAttemptInfo from "./QuizAttemptInfo";
import { DashboardAttemptType } from "@/lib/types/dashboardTypes";

export const Attempts: DashboardAttemptType[] = [
  {
    id: 1,
    // Answered quiz will carry the data of the users last attempt
    attempt: 10,
    status: "Finished",
    started: "Wednessday, 13 May 2026, 8:17 PM",
    completed: "Finished",
    duration: "4 mins 28 secs",
    mark: [5.0, 5.0],
    grade: [10.0, 10.0],
  },
  {
    id: 2,
    attempt: 10,
    status: "Finished",
    started: "Wednessday, 13 May 2026, 8:17 PM",
    completed: "Finished",
    duration: "4 mins 28 secs",
    mark: [5.0, 5.0],
    grade: [10.0, 10.0],
  },
  {
    id: 3,
    attempt: 10,
    status: "Finished",
    started: "Wednessday, 13 May 2026, 8:17 PM",
    completed: "Finished",
    duration: "4 mins 28 secs",
    mark: [5.0, 5.0],
    grade: [10.0, 10.0],
  },
  {
    id: 4,
    // This is an example of quiz that hasn't been answered
    attempt: 0,
    status: "Avaliable",
    started: "Not started",
    completed: "Not started",
    duration: "5 minutes",
    mark: [0.0, 5.0],
    grade: [0.0, 10.0],
  },
];

const QuizAttemptList = async function () {
  const AllQuizzesAttempts: DashboardAttemptType[] = await getQuizAttempts();

  // console.log(AllQuizzesAttempts);
  return (
    <ul className="space-y-3">
      {AllQuizzesAttempts.map((attemp, i) => {
        return (
          <QuizAttemptInfo attemp={attemp} key={i} i={i} isHidden={false} />
        );
      })}
    </ul>
  );
};

export default QuizAttemptList;
