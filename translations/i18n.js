import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './index'; // el archivo que me diste

i18n
  .use(initReactI18next)
  .init({
    resources: resources,
    lng: 'es', // idioma por defecto
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

//   i18n.addResourceBundle('es', 'translation', translations.es);
//   i18n.addResourceBundle('en', 'translation', translations.en);

export default i18n;
