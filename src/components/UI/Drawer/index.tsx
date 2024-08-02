import React, { useEffect, useState } from "react";
import { useDrawer } from "../../../hooks";
import styles from "./styles.module.scss";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Drawer: React.FC<React.PropsWithChildren<DrawerProps>> = ({
  isOpen,
  setIsOpen,
  children,
}) => {
  const [closing, setClosing] = useState(false);
  const { drawerRef } = useDrawer({isOpen, setIsOpen });

  useEffect(() => {
    if (!isOpen && closing) {
      const timeout = setTimeout(() => setClosing(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, closing]);

  const handleAnimationEnd = () => {
    if (!isOpen && closing) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={[
        styles["drawer"],
        isOpen ? styles["drawer--open"] : closing ? styles["drawer--closing"] : "",
      ].join(" ")}
      onAnimationEnd={handleAnimationEnd}
    >
      <div ref={drawerRef} className={styles["drawer__content"]}>
        {children} 
      </div>
    </div>
  );
};
