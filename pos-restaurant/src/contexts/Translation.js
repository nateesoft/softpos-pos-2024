import React, { createContext, useContext, useState } from "react"

import EnLang from '../locales/en/global.json'
import ThLang from '../locales/th/global.json'

const translations = {
  en: EnLang,
  th: ThLang,
};

const I18nContext = createContext()

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState("en")
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[lang];

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key;
      }
    }

    return value || key;
  };

  return (
    <I18nContext.Provider value={{ t, lang, setLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useTranslation = () => useContext(I18nContext)
