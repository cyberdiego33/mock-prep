"use client";

import Button from "./Button";

function StartExamModal({ onCloseModal }: { onCloseModal: () => void }) {
  return (
    <div className="bg-white rounded-sm max-w-120">
      <div className="p-4 border-b border-border">
        <p className="font-bold">Start attempt</p>
      </div>
      <div className="p-4 space-x-4">
        <p className="font-bold">Time limit</p>

        <span className="text-sm">
          Your attempt will have a time limit of 5 mins. When you start, the
          timer will begin to count down and cannot be paused. You must finish
          your attempt before it expires. Are you sure you wish to start now?
        </span>

        <div className="flex gap-3 my-3">
          <Button link="here">Start attempt</Button>
          <button className="font-semibold" onClick={() => onCloseModal?.()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartExamModal;
