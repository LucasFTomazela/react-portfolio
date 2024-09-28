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
      {/* <div className={styles.links}>
        <a href={project.demo} className={styles.link}>
          Link
        </a>
        <a href={project.source} className={styles.link}>
          GitHub
        </a>
      </div> */}
    </div>
  );
};
