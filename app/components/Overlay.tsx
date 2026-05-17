"use client";
import { Dispatch, SetStateAction } from "react";
import Button from "./Button";

const Overlay = function ({
  linkto,
  openModal,
  setOpenModal,
}: {
  linkto: string;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  if (!openModal) return;
  return (
    <div
      onClick={() => setOpenModal(false)}
      className="fixed inset-0 w-full h-full bg-modal-color/40 z-10 grid place-content-center"
    >
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
            <Button link={linkto}>Start attempt</Button>
            <button
              className="font-semibold"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
