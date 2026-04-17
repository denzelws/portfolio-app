import { useLocale } from "@/hooks/useLocale";
import styles from "./LanguageToggle.module.css";

export function LanguageToggle() {
  const { locale, changeLanguage } = useLocale();
  const isEN = locale === "en" || locale.startsWith("en");

  return (
    <div className={styles.toggle} role="group" aria-label="Language selector">
      <button
        className={`${styles.btn} ${isEN ? styles.active : ""}`}
        onClick={() => changeLanguage("en")}
        aria-pressed={isEN}
        aria-label="Switch to English"
      >
        EN
      </button>
      <div className={styles.divider} aria-hidden />
      <button
        className={`${styles.btn} ${!isEN ? styles.active : ""}`}
        onClick={() => changeLanguage("pt-BR")}
        aria-pressed={!isEN}
        aria-label="Mudar para Português"
      >
        PT
      </button>
    </div>
  );
}
