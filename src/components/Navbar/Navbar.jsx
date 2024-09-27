import { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";
import { Language } from "../Language/Language";

export const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={`${styles.navbar} center`}>
      <a className={styles.title} href="/">
        {t("pageName")}
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
            <a href="#about">{t("about")}</a>
          </li>
          <li>
            <a href="#experience">{t("experience")}</a>
          </li>
          <li>
            <a href="#projects">{t("projects")}</a>
          </li>
          <li>
            <a href="#contact">{t("contact")}</a>
          </li>
          <li>
            <Language />
          </li>
        </ul>
      </div>
    </nav>
  );
};
