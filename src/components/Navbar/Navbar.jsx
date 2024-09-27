import { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={`${styles.navbar} center`}>
      <a className={styles.title} href="/">
        {t("navBar.pageName")}
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">{t("navBar.about")}</a>
          </li>
          <li>
            <a href="#experience">{t("navBar.experience")}</a>
          </li>
          <li>
            <a href="#projects">{t("navBar.projects")}</a>
          </li>
          <li>
            <a href="#contact">{t("navBar.contact")}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
