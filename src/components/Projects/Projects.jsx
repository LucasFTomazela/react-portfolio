import { useTranslation } from "react-i18next";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export const Project = () => {
  const { t } = useTranslation();
  const projects = t("projects.project", { returnObjects: true }); // Buscando os projetos traduzidos

  return (
    <section className={`${styles.container} center`} id="projects">
      <h2 className={styles.title}>{t("projects.title")}</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} /> // Passando projeto para o ProjectCard
        ))}
      </div>
    </section>
  );
};
