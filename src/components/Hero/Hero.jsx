import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t("name1")}</h1>
        <p className={styles.description}>{t("hero_desc")}</p>
        <a className={styles.contactBtn} href="mailto:prerakjain00@gmail.com">
          {t("Contact Me")}
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage1.jpg")}
        alt="Hero-Image"
      />
    </section>
  );
};

export default Hero;
