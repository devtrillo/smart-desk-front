import React, { useContext } from "react";
import { ThemeContext } from "context/Theme";
import styles from "./styles.module.css";

const Navbar = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <span className={styles.logoText}>Smart desk</span>
        </li>
        <li className={styles.navbarItem}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="home"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M336 463.59V368a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v95.71a16 16 0 0 1-15.92 16L112 480a16 16 0 0 1-16-16V300.06l184.39-151.85a12.19 12.19 0 0 1 15.3 0L480 300v164a16 16 0 0 1-16 16l-112-.31a16 16 0 0 1-16-16.1z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M573.32 268.35l-25.5 31a12 12 0 0 1-16.9 1.65L295.69 107.21a12.19 12.19 0 0 0-15.3 0L45.17 301a12 12 0 0 1-16.89-1.65l-25.5-31a12 12 0 0 1 1.61-16.89L257.49 43a48 48 0 0 1 61 0L408 116.61V44a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v138.51l83.6 68.91a12 12 0 0 1 1.72 16.93z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </li>
        <li className={styles.navbarItem}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="lightbulb"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M175.45 0C73.44.31 0 83 0 176a175 175 0 0 0 43.56 115.78c16.52 18.85 42.36 58.22 52.21 91.45 0 .26.07.52.11.78h160.24c0-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45A175.9 175.9 0 0 0 175.45 0zm.55 96a80.09 80.09 0 0 0-80 80 16 16 0 0 1-32 0A112.12 112.12 0 0 1 176 64a16 16 0 0 1 0 32z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M96.06 454.35L96 416h160v38.35a32 32 0 0 1-5.41 17.65l-17.09 25.73A32 32 0 0 1 206.86 512h-61.71a32 32 0 0 1-26.64-14.28L101.42 472a32 32 0 0 1-5.36-17.65z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </li>
        <li className={styles.navbarItem} onClick={changeTheme}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="palette"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M204.29 5c-99.4 19.4-179.5 99.29-199.1 198.4-37 187 131.7 326.39 258.8 306.69 41.2-6.4 61.4-54.59 42.5-91.69-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.31C511.49 97.13 368.09-26.87 204.29 5zM96 320a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-128a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm128-64a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm128 64a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M96 256a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm32-128a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm128-64a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm128 64a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
