import { useEffect, useState } from "react";
import styles from "./Toast.module.css";

interface ToastProps {
  visible: boolean;
  onDismiss: () => void;
}

export function Toast({ visible, onDismiss }: ToastProps) {
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
            aria-label="Fechar"
          />
          <span className={`${styles.dot} ${styles.dotYellow}`} aria-hidden />
          <span className={`${styles.dot} ${styles.dotGreen}`} aria-hidden />
        </div>
        <span className={styles.titlebarLabel}>intro.sh</span>
      </div>
      <div className={styles.body}>
        <div className={styles.line}>
          <span className={styles.prompt}>›</span>
          <span className={styles.cmd}>whoami</span>
        </div>
        <div className={styles.output}>
          <span className={styles.name}>Denzel Washington</span>
          <span className={styles.comma}>,</span>
          <span className={styles.role}> dev.</span>
        </div>
        <div className={styles.muted}>Não o ator.</div>
      </div>
    </div>
  );
}
