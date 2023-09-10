import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { supportedLanguages } from "../../config/i18n";
import { languageCodeOnly } from "../../services/i18n";
// import { i18n } from "../../services/i18n";

const LanguageSwitcher = ({ onChange }) => {
  const { i18n } = useTranslation();
  // console.log("i18n.language ", i18n.language);

  return (
    // <div>
    <img
      className={styles.languageSwitcher}
      src={getImageUrl("nav/translate.png")}
      alt="Language Change"
      onClick={
        i18n.language === "en"
          ? () => i18n.changeLanguage("hi")
          : () => i18n.changeLanguage("en")
      }
    />
    // {/* <select value={i18n.language} onChange={(e) => onChange(e.target.value)}>
    //   {supportedLanguages.map((lang) => (
    //     <option key={lang.code} value={lang.code}>
    //       {lang.name}
    //     </option>
    //   ))}
    // </select> */}
    // </div>
  );
};

export default LanguageSwitcher;
