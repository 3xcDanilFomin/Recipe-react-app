import { Outlet } from "react-router-dom";

import { Navigation } from "../Navigation";
import styles from "./styles.module.scss";

export const Layout: React.FC = () => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["layout__content"]} id="layout-content">
        <Outlet />
      </div>
      <Navigation />
    </div>
  );
};
