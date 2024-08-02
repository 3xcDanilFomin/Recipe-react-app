import { useEffect, useRef } from "react";

interface UseDrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useDrawer = ({ isOpen, setIsOpen }: UseDrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const startPositionY = useRef(0);

  useEffect(() => {

    if(isOpen && drawerRef.current){
      drawerRef.current.style.transform = "translateY(0)";
      drawerRef.current.style.transition = "transform 0.3s ease";
    }

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        drawerRef.current.style.transform = "translateY(100%)";
        drawerRef.current.style.transition = "transform 0.3s ease";
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      startPositionY.current = e.targetTouches[0].clientY;
      if (drawerRef.current) {
        drawerRef.current.style.transition = "none"; 
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (drawerRef.current) {
        const currentPositionY = e.targetTouches[0].clientY;
        const diffY = currentPositionY - startPositionY.current;

        if (diffY > 0) {
          drawerRef.current.style.transform = `translateY(${diffY}px)`;
        }
      }
    };

    const handleTouchEnd = () => {
      if (drawerRef.current) {
        const currentPositionY = parseFloat(
          drawerRef.current.style.transform
            .replace("translateY(", "")
            .replace("px)", "")
        );
        if (currentPositionY > 80) {
          drawerRef.current.style.transition = "transform 0.3s ease"; 
          drawerRef.current.style.transform = "translateY(100%)";
          setIsOpen(false);
          setTimeout(() => {
            if (drawerRef.current) {
              drawerRef.current.style.transform = "translateY(100%)";
              drawerRef.current.style.transition = "";
            }
          }, 300); 
        } else {
          drawerRef.current.style.transition = "transform 0.3s ease"; 
          drawerRef.current.style.transform = "translateY(0px)";
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    if (drawerRef.current) {
      drawerRef.current.addEventListener("touchstart", handleTouchStart);
      drawerRef.current.addEventListener("touchmove", handleTouchMove);
      drawerRef.current.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      if (drawerRef.current) {
        drawerRef.current.removeEventListener("touchstart", handleTouchStart);
        drawerRef.current.removeEventListener("touchmove", handleTouchMove);
        drawerRef.current.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [isOpen, setIsOpen]);

  return {
    drawerRef,
  };
};
