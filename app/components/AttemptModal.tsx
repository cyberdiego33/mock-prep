"use client";

import Modal from "./ClaudeModal";
import { useModal } from "../_hooks/useModal";
import StartExamModal from "./StartExamModal";

export default function AttemptModal({ text }: { text: string }) {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button className="hover:cursor-pointer" onClick={open}>
        {text}
      </button>

      <Modal isOpen={isOpen} onClose={close}>
        <StartExamModal onCloseModal={close} />
      </Modal>
    </>
  );
}
