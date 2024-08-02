import { Outlet, useLocation } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./styles.module.scss";

export const AnimatedOutlet: React.FC = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames={{
          enter: styles["fade-enter"],
          enterActive: styles["fade-enter-active"],
          exit: styles["fade-exit"],
          exitActive: styles["fade-exit-active"],
        }}
        timeout={400}
      >
        <Outlet />
      </CSSTransition>
    </TransitionGroup>
  );
};
