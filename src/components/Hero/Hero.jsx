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
        <a
          href="mailto:lucasfernandobts@gmail.com"
          className={styles.contactBtn}
        >
          {t("hero.contactBtn")}
        </a>
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
