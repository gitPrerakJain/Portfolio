import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t("Contact")}</h2>
        <p>{t("footer_desc")}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
          <a href="mailto:prerakjain00@gmail.com">prerakjain00@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linedin" />
          <a
            href="https://www.linkedin.com/in/prerakjain00/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/prerakjain00
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github" />
          <a
            href="https://github.com/gitPrerakJain"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/gitPrerakJain
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
