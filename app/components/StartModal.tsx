"use client";
import { useModal } from "../_hooks/useModal";
import Modal from "./ClaudeModal";
import StartExamModal from "./StartExamModal";

const StartModal = function () {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button
        className="bg-button-primary text-sm font-semibold text-white px-3 py-2 rounded-sm hover:cursor-pointer"
        onClick={open}
      >
        Re-attempt quiz
      </button>

      <Modal isOpen={isOpen} onClose={close}>
        <StartExamModal onCloseModal={close} />
      </Modal>
    </>
  );
};

export default StartModal;
