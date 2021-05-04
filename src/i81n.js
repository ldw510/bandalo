import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsEn from './locales/en/translationEn.json';
import translationsHr from './locales/hr/translationHr.json';

i18n
  .use(initReactI18next)
  .init({
      resources: {
          hr: { translation: translationsHr },
          en: { translation: translationsEn },
      },
      lng: "hr",
      fallbackLng: "hr",
      interpolation: { escapeValue: false},
  });


export default i18n;