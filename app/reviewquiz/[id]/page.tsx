import { PiTimerBold } from "react-icons/pi";
import QuizAttemptInfo from "@/app/components/QuizAttemptInfo";
import QuestionInterface from "@/app/components/QuestionInterface";
import { Attempts } from "@/app/components/QuizAttemptList";
import Button from "@/app/components/Button";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async function ({ params }: PageProps) {
  const { id } = await params;

  const attemp = Attempts[Number(id)];

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
        <QuizAttemptInfo attemp={attemp} i={Number(id)} isHidden={true} />
      </ul>

      <section>
        <QuestionInterface />
      </section>

      <div>
        <Button link="/">Finish review</Button>
      </div>
    </>
  );
};

export default Page;
