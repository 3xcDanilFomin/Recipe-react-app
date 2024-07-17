import { Outlet } from "react-router-dom";

import { Navigation } from "../Navigation";
import styles from "./styles.module.scss";

export const Layout: React.FC = () => {
  return (
    <div className={styles["layout"]}>
      <Outlet />
      <Navigation />
    </div>
  );
};
