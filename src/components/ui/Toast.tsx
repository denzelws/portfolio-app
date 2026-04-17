import { useEffect, useState } from "react";
import { useLocale } from "@/hooks/useLocale";
import styles from "./Toast.module.css";

interface ToastProps {
  visible: boolean;
  onDismiss: () => void;
}

export function Toast({ visible, onDismiss }: ToastProps) {
  const { t } = useLocale();
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (visible) {
      setRendered(true);
      const timer = setTimeout(onDismiss, 5000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setRendered(false), 400);
      return () => clearTimeout(timer);
    }
  }, [visible, onDismiss]);

  if (!rendered) return null;

  return (
    <div
      className={`${styles.toast} ${visible ? styles.visible : styles.hidden}`}
    >
      <div className={styles.titlebar}>
        <div className={styles.dots}>
          <span
            className={`${styles.dot} ${styles.dotRed}`}
            onClick={onDismiss}
            role="button"
            aria-label="close"
          />
          <span className={`${styles.dot} ${styles.dotYellow}`} aria-hidden />
          <span className={`${styles.dot} ${styles.dotGreen}`} aria-hidden />
        </div>
        <span className={styles.titlebarLabel}>{t("toast.file")}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.line}>
          <span className={styles.prompt}>›</span>
          <span className={styles.cmd}>{t("toast.cmd")}</span>
        </div>
        <div className={styles.output}>
          <span className={styles.name}>{t("toast.name")}</span>
          <span className={styles.comma}>{t("toast.role")}</span>
        </div>
        <div className={styles.muted}>{t("toast.muted")}</div>
      </div>
    </div>
  );
}
