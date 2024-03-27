import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLanguage from "./en.json";
import frLanguage from "./fr.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enLanguage,
      },
      fr: {
        translation: frLanguage,
      },
    },
    lng: "fr", // if you're using a language detector, do not define the lng option
    fallbackLng: "fr",
    // seperator: ".",
    // keySeparator: ".",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
  export default i18n;