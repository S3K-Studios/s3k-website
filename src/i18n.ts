import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import tr from "./locales/tr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
    },
    fallbackLng: "tr",
    interpolation: { escapeValue: false },
    detection: {
      order: [
        "localStorage",
        "navigator",
        "htmlTag",
        "cookie",
        "path",
        "subdomain",
      ],
      caches: ["localStorage"],
    },
  });

const documentTitles: Record<string, string> = {
  tr: "S3K Studios - Oyun Geliştirme Stüdyosu",
  en: "S3K Studios - Game Development Studio",
};

// Keep <html lang> and the tab title in sync with the active language.
// CSS `uppercase` follows the lang attribute, so an English page served
// with lang="tr" renders "SPECİAL" instead of "SPECIAL".
const syncDocumentLanguage = (lng: string) => {
  const lang = lng.startsWith("en") ? "en" : "tr";

  document.documentElement.lang = lang;
  document.title = documentTitles[lang];
};

syncDocumentLanguage(i18n.resolvedLanguage || i18n.language || "tr");
i18n.on("languageChanged", syncDocumentLanguage);

export default i18n;
