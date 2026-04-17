import { useLocale } from "@/hooks/useLocale";
import styles from "./EmptyLibrary.module.css";

export function EmptyLibrary() {
  const { t } = useLocale();
  return (
    <div className={styles.wrap}>
      <span className={styles.emoji} aria-hidden>
        ⚙️
      </span>
      <p className={styles.title}>{t("empty_library.title")}</p>
      <p className={styles.subtitle}>
        {t("empty_library.subtitle")}
        <br />
        <span className={styles.accent}>{t("empty_library.accent")}</span>
      </p>
      <div className={styles.terminal}>
        <span className={styles.prompt}>›</span>
        <span className={styles.cmd}>{t("empty_library.cmd")}</span>
        <span className={styles.blink} aria-hidden />
      </div>
    </div>
  );
}
