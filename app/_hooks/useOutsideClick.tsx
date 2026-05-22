"use client";
import { useEffect, useRef } from "react";

export const useOutsideClick = function (
  handler: () => void,
  listenCapturing: boolean = true,
) {
  // Use HTMLDivElement to match StyledModal (which is a div)
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        // e.target must be cast to Node to use .contains()
        if (ref.current && !ref.current.contains(e.target as Node)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing],
  );

  return ref;
};
