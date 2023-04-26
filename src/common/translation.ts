import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import translationEn from "./translationEn.json";
import translationUk from "./translationUk.json";

export default i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    uk: { translation: translationUk },
  },
  lng: "uk",
  fallbackLng: "uk",
  interpolation: { escapeValue: false },
});
