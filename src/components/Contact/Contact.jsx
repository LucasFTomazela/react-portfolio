import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={`${styles.container}`} id="contact">
      <div className={`${styles.content} center`}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Fell free to reach out!</p>
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
            <a href="www.linkedin.com/in/lucasftomazela">
              linkedin.com/lucasftomazela
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Email icon" />
            <a href="https://github.com/LucasFTomazela">
              github.com/LucasFTomazela
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
