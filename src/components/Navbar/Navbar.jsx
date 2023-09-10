import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = ({ onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        {t("app_title")}
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            isOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="Menu Button"
          onClick={() => setIsOpen(!isOpen)}
        />
        <ul
          className={`${styles.menuItems} ${isOpen && styles.menuOpen}`}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <li>
            <a href="#about">{t("About")}</a>
          </li>
          <li>
            <a href="#mySkills">{t("My Skills")}</a>
          </li>
          <li>
            <a href="#projects">{t("Projects")}</a>
          </li>
          <li>
            <a href="#contact">{t("Contact")}</a>
          </li>
          <LanguageSwitcher onChange={onLanguageChange} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
