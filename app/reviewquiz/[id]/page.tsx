import { PiTimerBold } from "react-icons/pi";
import QuizAttemptInfo from "@/app/components/QuizAttemptInfo";
import QuestionInterface from "@/app/components/QuestionInterface";
import { Attempts } from "@/app/components/QuizAttemptList";
import Button from "@/app/components/Button";
import { getAttemptById } from "@/lib/actions/reviewAttemptsById";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async function ({ params }: PageProps) {
  const { id } = await params;

  const attemp = Attempts[Number(id)]; // This is dummy data

  // console.log(id);
  const { attempt, questions } = await getAttemptById(Number(id));
  // console.log(JSON.stringify(questions));

  return (
    <>
      <section>
        <div className="flex gap-4 items-center">
          <div className="p-3 rounded-sm bg-red-600/50">
            <PiTimerBold className="text-red-700 size-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">Mock Exams {id} </h1>
        </div>
      </section>

      <ul>
        <QuizAttemptInfo attemp={attempt} i={Number(id)} isHidden={true} />
      </ul>

      <section>
        <QuestionInterface questions={questions} />
      </section>

      <div>
        <Button link="/">Finish review</Button>
      </div>
    </>
  );
};

export default Page;
