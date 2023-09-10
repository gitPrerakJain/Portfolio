import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t("Projects")}</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
