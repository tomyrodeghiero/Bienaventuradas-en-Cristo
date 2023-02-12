import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Home: "Home",
      Topics: "Topics",
      Subscribe: "Subscribe",
      Evangelization: "Evangelization",
      "Subtitle of Evangelization":
        "Preaching the Gospel to every creature, fulfilling our beatiful duty as Christians!",
      "Reading list": "Reading list",
      Posts: "Posts",
      Reading: "Reading",
      "Load more": "Load more",
    },
  },
  es: {
    translation: {
      Home: "Inicio",
      Topics: "Temas",
      Subscribe: "Subscribirse",
      Evangelization: "Evangelización",
      "Subtitle of Evangelization":
        "Predicar el Evangelio a toda criatura, ¡cumpliendo nuestro hermoso deber como Cristianos!",
      "Reading list": "Lista de lecturas",
      Posts: "Posteos",
      Reading: "Lectura",
      "Load more": "Cargar más",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
