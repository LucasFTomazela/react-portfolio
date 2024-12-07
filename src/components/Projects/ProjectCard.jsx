/* eslint-disable react/prop-types */
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  // Adicionando props para receber o projeto

  // Acessando os dados do projeto
  return (
    <div className={`${styles.container}`}>
      <img
        src={getImageUrl(project.imageSrc)}
        alt={`Image of ${project.title}`}
        className={styles.image}
      />
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a target="_blank" href={project.demo || "#"} className={`${styles.link} ${!project.demo ? styles.disabled : ""}`}
        onClick={(e) => !project.demo && e.preventDefault()}>
          Link
        </a>
        <a target="_blank" href={project.source || "#"}
        className={`${styles.link} ${!project.source ? styles.disabled : ""}`}
        onClick={(e) => !project.source && e.preventDefault()}>
          GitHub
        </a>
      </div>
    </div>
  );
};
