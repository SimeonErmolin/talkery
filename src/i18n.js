import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ua from '../src/shared/translations/ua.json';
import ru from '../src/shared/translations/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ua: { translation: ua },
      ru: { translation: ru },
    },
    lng: 'ua',
    fallbackLng: 'ua',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
