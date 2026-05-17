"use client";

import { useState } from "react";
import Overlay from "./Overlay";

const ButtonModal = function () {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Overlay
        linkto={`./attemptquiz/1`}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <button
        onClick={() => setOpenModal(true)}
        // className="font-semibold text-white py-2 px-3 bg-blue-900 rounded-sm"
        className="bg-button-primary text-white text-sm py-2 px-3 rounded-sm"
      >
        Re-attempt quiz
      </button>
    </>
  );
};

export default ButtonModal;
