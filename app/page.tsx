import { PiTimerBold } from "react-icons/pi";
import QuizAttemptList from "./components/QuizAttemptList";
import StartModal from "./components/StartModal";

export default function Home() {
  return (
    <>
      <section>
        <div className="flex gap-4 items-center">
          <div className="p-3 rounded-sm bg-red-600/50">
            <PiTimerBold className="text-red-700 size-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">Mock Exams</h1>
        </div>

        <div>
          <div className="my-5">
            <StartModal />
          </div>

          <div className="space-y-5">
            <p>Time limit: 5 mins</p>
            <p>Grading method: Last attempt</p>

            <p className="text-xl font-semibold">
              Last attempt: <span>10.00</span> / <span>10.00</span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <h3 className="font-bold text-xl">Quiz List</h3>
        <div>
          <QuizAttemptList />
        </div>
      </section>
    </>
  );
}
