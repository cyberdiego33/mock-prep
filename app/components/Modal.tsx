"use client";
import {
  createContext,
  Dispatch,
  HTMLAttributes,
  useContext,
  ReactNode,
  ReactElement,
  useState,
  SetStateAction,
  cloneElement,
} from "react";
import { useOutsideClick } from "../_hooks/useOutsideClick";
// import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

interface ModalType {
  openName: string;
  openWindow: Dispatch<SetStateAction<string>>;
  closeWindow: () => void;
}

interface ModalProps {
  children: ReactNode; // Fix: Explicitly type children
}

interface OpenProps {
  children: ReactElement; // Must be a single element to clone
  opens: string;
}

interface InjectedProps {
  onCloseModal?: () => void;
}

interface WindowProps {
  children: ReactElement<InjectedProps>;
  name: string;
}

// 1) Create a Context Api
const ModalContext = createContext<ModalType | undefined>(undefined);

// 2) Create a parent component and give the Context Value
const Modal = function ({ children }: ModalProps) {
  const [openName, setOpenName] = useState("");

  const closeWindow = () => setOpenName("");
  const openWindow = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, openWindow, closeWindow }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = function ({ children, opens: opensWindowName }: OpenProps) {
  const context = useContext(ModalContext);
  if (!context) return null;

  const { openWindow } = context;

  // Injects the onClick handler into the trigger button/element
  return cloneElement(children as ReactElement<HTMLAttributes<HTMLElement>>, {
    onClick: () => openWindow(opensWindowName),
  });
};

const Window = function ({ children, name }: WindowProps) {
  const context = useContext(ModalContext);
  const { openName, closeWindow } = context!;

  const ref = useOutsideClick(closeWindow); // But this is a custom hook so it can't stay below a conditional render

  if (!context) return null;

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={closeWindow}>X</Button>
        {/* Injects the close function into the modal content */}
        <div>
          {cloneElement(children, {
            onCloseModal: closeWindow,
          })}
        </div>{" "}
        {/*  I am getting an error here onCloseModal  */}
      </StyledModal>
    </Overlay>,
    document.body,
  );
};

// 4) Assign them as methods
// Modal.Open = Open;
// Modal.Window = Window;
// export default Modal;

// Instead of assigning to a function, export a plain object
// const ModalCompound = { // tried the first one but it didn't work
//   Root: Modal,
//   Open,
//   Window,
// };

// Declare the type so TypeScript knows these properties exist
const ModalWithSubs = Modal as typeof Modal & {
  // this one same error too
  Open: typeof Open;
  Window: typeof Window;
};

ModalWithSubs.Open = Open;
ModalWithSubs.Window = Window;

export default ModalWithSubs;

// export default ModalCompound;
