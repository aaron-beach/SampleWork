import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en";
import fr from "./fr";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en,
  fr
};

i18n
  .use(LanguageDetector) // detect langugae from a variety of sources
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: ".",
    interpolation: {
      escapeValue: false // escaping is handled by React
    }
  });

export default i18n;
