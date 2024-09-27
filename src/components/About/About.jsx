import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  const { t } = useTranslation();
  return (
    <section className={`${styles.container}`} id="about">
      <h2 className={styles.title}>{t("about.title")}</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.title1")}</h3>
              <p>{t("about.description1")}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.title2")}</h3>
              <p>{t("about.description2")}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.title3")}</h3>
              <p>{t("about.description3")}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
