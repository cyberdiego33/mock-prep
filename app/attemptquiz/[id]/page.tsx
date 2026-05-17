import Button from "@/app/components/Button";
import QuestionStepper from "@/app/components/QuestionStepper";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async function ({ params }: PageProps) {
  const { id } = await params;
  // const question = QuestionsList[0];

  return (
    <div className="space-y-2">
      <div className="space-y-3 relative">
        <div>
          <Button link="/">Back</Button>
        </div>

        <div className="space-x-1 bg-back-btn-primary/40 px-2 py-1 rounded-full ml-auto w-fit sticky">
          <span>04</span> <span>:</span> <span>55</span>
        </div>
      </div>

      <QuestionStepper />
    </div>
  );
};

export default Page;
