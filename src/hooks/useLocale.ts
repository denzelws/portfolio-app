import { useTranslation } from "react-i18next";

export function useLocale() {
  const { t, i18n } = useTranslation();

  const locale = i18n.language || "en";
  const isPT = locale.startsWith("pt");

  const changeLanguage = (lang: "en" | "pt-BR") => {
    i18n.changeLanguage(lang);
  };

  return { t, locale, isPT, changeLanguage };
}
