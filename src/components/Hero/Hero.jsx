import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={`${styles.container} center`}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Lucas</h1>
        <p className={styles.description}>
          I&apos;m moving into software development after experience in systems
          analysis. I&apos;m eager to contribute to innovative projects and grow my
          skills. Let&apos;s connect!
        </p>
        <a
          href="mailto:lucasfernandobts@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
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
