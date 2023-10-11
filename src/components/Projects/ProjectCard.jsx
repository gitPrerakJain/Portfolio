import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li className={styles.skill} key={id}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a target="_blank" className={styles.link} href={demo}>
          Demo
        </a>
        <a target="_blank" className={styles.link} href={source}>
          Source
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
