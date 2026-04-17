import { useLocale } from "@/hooks/useLocale";
import styles from "./Footer.module.css";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className={styles.footer} id="contato">
      <span className={styles.copy}>{t("footer.copy")}</span>
      <nav className={styles.links} aria-label="Social links">
        <a
          href="https://github.com/denzelws"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {t("footer.github")}
        </a>
        <a
          href="https://linkedin.com/in/denzelws"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {t("footer.linkedin")}
        </a>
        <a
          href="https://layers.to/denzelws"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {t("footer.layers")}
        </a>
      </nav>
    </footer>
  );
}
