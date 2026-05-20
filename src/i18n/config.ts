import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enTranslation from "./locales/en.json"
import itTranslation from "./locales/it.json"

const resources = {
  en: {
    translation: enTranslation,
  },
  it: {
    translation: itTranslation,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "it",
  fallbackLng: "it",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
