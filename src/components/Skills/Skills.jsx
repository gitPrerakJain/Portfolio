import React from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import { useTranslation } from "react-i18next";
const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="mySkills" className={styles.container}>
      <h2 className={styles.title}>{t("My Skills")}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
