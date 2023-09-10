import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils.js";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t("About")}</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage1.jpg")}
          alt="Me sitting with a laptop"
        />

        <ul className={styles.aboutItems}>
          <li tabIndex="0" role="button" className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Icon"
              // className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3>{t("front_dev")}</h3>
              <p>{t("front_desc")}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div>
              <h3>{t("back_dev")}</h3>
              <p>{t("back_desc")}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
