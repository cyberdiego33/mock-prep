import Link from "next/link";
import { DashboardAttemptType } from "@/lib/types/dashboardTypes";
import AttemptModal from "./AttemptModal";

const QuizAttemptInfo = function ({
  attemp,
  i,
  isHidden,
}: {
  attemp: DashboardAttemptType;
  i: number;
  isHidden: boolean;
}) {
  return (
    <li id={`${attemp.id}`}>
      <div className="p-3 space-y-3 border border-border rounded-sm">
        <p className="text-sm font-semibold">
          Attempt <span>{attemp.attempt}</span>
        </p>

        <div className="flex flex-wrap gap-2">
          <div className="p-3 border border-border rounded-sm w-fit xl:grow">
            <span className="text-sm">status</span>
            <p className="font-semibold">{attemp.status}</p>
          </div>
          <div className="p-3 border border-border rounded-sm w-fit xl:grow">
            <span className="text-sm">started</span>
            <p className="font-semibold">{attemp.started}</p>
          </div>
          <div className="p-3 border border-border rounded-sm xl:grow">
            <span className="text-sm">completed</span>
            <p className="font-semibold">{attemp.completed}</p>
          </div>
          <div className="p-3 border border-border rounded-sm xl:grow">
            <span className="text-sm">Duration</span>
            <p className="font-semibold">{attemp.duration}</p>
          </div>
          <div className="p-3 border border-border rounded-sm xl:grow">
            <span className="text-sm">Marks</span>
            <p className="font-semibold">
              <span>{Number(attemp.mark[0]).toFixed(2)}</span>/
              <span>{Number(attemp.mark[1]).toFixed(2)}</span>
            </p>
          </div>
          <div className="p-3 border border-border rounded-sm xl:grow">
            <span className="text-sm">Grade</span>
            <p className="font-semibold">
              <span>{Number(attemp.grade[0]).toFixed(2)}</span> out of{" "}
              <span>{Number(attemp.grade[1]).toFixed(2)}</span>{" "}
              <span>(100%)</span>
            </p>
          </div>
        </div>

        {isHidden ? (
          ""
        ) : (
          <div className="flex gap-3">
            {attemp.attempt === 0 ? (
              <AttemptModal text="Attempt" />
            ) : (
              <>
                <Link
                  href={`./reviewquiz/${attemp.id}`}
                  className="text-blue-900"
                >
                  Review
                </Link>
                <AttemptModal text="Re-attempt" />
              </>
            )}
          </div>
        )}
      </div>
    </li>
  );
};

export default QuizAttemptInfo;
