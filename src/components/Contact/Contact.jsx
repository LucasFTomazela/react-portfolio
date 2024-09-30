import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <footer className={`${styles.container}`} id="contact">
      <div className={`${styles.content} center`}>
        <div className={styles.text}>
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.paragraph")}</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:lucasfernandobts@gmail.com">
              lucasfernandobts@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="Linkedin icon"
            />
            <a
              href="https://www.linkedin.com/in/lucasftomazela"
              target="_blank"
            >
              linkedin.com/lucasftomazela
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub icon"
            />
            <a href="https://github.com/LucasFTomazela" target="_blank">
              github.com/LucasFTomazela
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
