import i18n from "i18next";
import enTranslation from "./locales/en/translations.json";
import frTranslation from "./locales/fr/translations.json";

i18n.init({
  lng: "en",
  // debug: true,
  resources: {
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
});

export default i18n;
