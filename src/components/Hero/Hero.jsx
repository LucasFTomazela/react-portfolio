import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className={`${styles.container} center`}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t("hero.nameHero")}</h1>
        <p className={styles.description}>{t("hero.descriptionHero")}</p>
        <div className={styles.buttonsHero}>
          <a
            href="mailto:lucasfernandobts@gmail.com"
            className={styles.contactBtn}
          >
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            {t("hero.contactBtn")}
          </a>
          <a
            href={getImageUrl("curriculum/cvLucasTomazela.pdf")}
            className={styles.contactBtn}
            download="cvLucasTomazela"
          >
            <img
              src={getImageUrl("curriculum/download.svg")}
              alt="Email icon"
            />
            {t("hero.downloadCV")}
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/avatar.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
