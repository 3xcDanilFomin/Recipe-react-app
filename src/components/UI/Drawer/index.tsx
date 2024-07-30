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
  const { drawerRef, isClosing } = useDrawer({ isOpen, setIsOpen });

  return (
    <div
      ref={drawerRef}
      className={[
        styles["drawer"],
        isOpen
          ? styles["drawer--open"]
          : isClosing && styles["drawer--closing"],
      ].join(" ")}
    >
      <div className={styles["drawer__content"]}>{children}</div>
    </div>
  );
};
