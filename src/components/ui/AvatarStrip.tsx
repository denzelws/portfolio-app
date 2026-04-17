import { useLocale } from "@/hooks/useLocale";
import styles from "./AvatarStrip.module.css";

export function AvatarStrip() {
  const { t } = useLocale();
  return (
    <div className={styles.strip}>
      <div className={styles.avatarWrap}>
        <img
          src="/memoji.jpg"
          alt="Denzel Washington"
          className={styles.avatar}
        />
        <span className={styles.onlineDot} aria-hidden />
      </div>
      <div className={styles.info}>
        <div className={styles.nameRow}>
          <span className={styles.name}>Denzel Washington</span>
          <span className={styles.badge}>{t("avatar.available")}</span>
        </div>
        <span className={styles.role}>{t("avatar.role")}</span>
        <span className={styles.stack}>{t("avatar.stack")}</span>
      </div>
    </div>
  );
}
