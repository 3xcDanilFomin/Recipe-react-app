import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export const AuthLink: React.FC = () => {
  return <Link className={styles["auth-link"]} to="/auth">Авторизоваться</Link>;
};
