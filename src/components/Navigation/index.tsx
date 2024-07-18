import { Link, useLocation } from "react-router-dom";
import { memo, ReactElement, useState } from "react";

import styles from "./styles.module.scss";

interface ILink {
  path: string;
  icon: ReactElement;
}

const links: ILink[] = [
  {
    path: "/",
    icon: (
      <svg
        className={styles["menu__icon"]}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579Z" />
        <path d="M15 18H9" />
      </svg>
    ),
  },
  {
    path: "/search",
    icon: (
      <svg
        className={styles["menu__icon"]}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" />
      </svg>
    ),
  },
  {
    path: "/favourites",
    icon: (
      <svg
        className={styles["menu__icon"]}
        viewBox="-0.5 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.6001 3.91998C14.268 3.92397 12.9849 4.42297 12 5.32001C11.2277 4.61746 10.2676 4.15485 9.23679 3.98858C8.20602 3.82231 7.1491 3.95955 6.19498 4.3836C5.24087 4.80765 4.43081 5.50018 3.8635 6.37671C3.29619 7.25324 2.99614 8.27591 3.00004 9.32C3.00004 15.77 12 20.14 12 20.14C12 20.14 21 15.77 21 9.32C21 7.88784 20.4311 6.51434 19.4184 5.50165C18.4057 4.48895 17.0322 3.91998 15.6001 3.91998Z" />
      </svg>
    ),
  },
  {
    path: "/profile",
    icon: (
      <svg
        className={styles["menu__icon"]}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" />
        <path d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" />
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      </svg>
    ),
  },
];

export const Navigation: React.FC = memo(() => {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState<string>(pathname);

  const handleActiveLink = (path: string): void => {
    setActiveLink(path);
  };
  return (
    <ul className={styles["menu"]}>
      {links.map((link) => (
        <li
          className={
            activeLink === link.path
              ? [styles["menu__item"], styles["menu__item--active"]].join(" ")
              : styles["menu__item"]
          }
          onClick={() => handleActiveLink(link.path)}
          key={link.path}
        >
          <Link className={styles["menu__link"]} to={link.path}>
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
});
