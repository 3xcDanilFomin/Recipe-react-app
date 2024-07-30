import { useEffect, useRef, useState } from "react";

interface UseDrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useDrawer = ({ isOpen, setIsOpen }: UseDrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const drawerElement = drawerRef.current;

    const touchEndHandler = () => {
      document.body.classList.remove("open-drawer");
      setIsOpen(false);
    };

    if (drawerElement) {
      drawerElement.addEventListener("touchend", touchEndHandler);
    }

    return () => {
      if (drawerElement) {
        drawerElement.removeEventListener("touchend", touchEndHandler);
      }
    };
  }, [isOpen, setIsOpen]);

  return {
    drawerRef,
    isClosing,
    setIsClosing,
  };
};
