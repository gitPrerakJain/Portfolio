import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "../locale/en/translation.json";
import hiJSON from "../locale/hi/translation.json";
import { defaultLanguage, supportedLanguages } from "../config/i18n";

i18n.use(initReactI18next).init({
  supportedLngs: supportedLanguages.map((lang) => lang.code),

  resources: {
    en: { ...enJSON },
    hi: { ...hiJSON },
  },
  lng: "en",
  // debug: true,

  fallbackLng: defaultLanguage,
});

export function languageCodeOnly(fullyQualifiedCode) {
  // console.log("langCode ", fullyQualifiedCode?.split("-")[0]);
  return fullyQualifiedCode?.split("-")[0];
}

export default i18n;
