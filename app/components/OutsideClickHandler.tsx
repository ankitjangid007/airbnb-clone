"use client";

import React, { useRef, useEffect, ReactNode } from "react";

interface OutsideClickHandlerProps {
  children: ReactNode;
  onHide: () => void;
}

const OutsideClickHandler: React.FC<OutsideClickHandlerProps> = ({
  children,
  onHide,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onHide();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onHide]);

  return <div ref={ref}>{children}</div>;
};

export default OutsideClickHandler;
