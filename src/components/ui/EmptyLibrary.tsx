import styles from "./EmptyLibrary.module.css";

export function EmptyLibrary() {
  return (
    <div className={styles.wrap}>
      <span className={styles.emoji} aria-hidden>
        ⚙️
      </span>
      <p className={styles.title}>building in progress</p>
      <p className={styles.subtitle}>
        new projects are being pushed to production.
        <br />
        <span className={styles.accent}>check back soon.</span>
      </p>
      <div className={styles.terminal}>
        <span className={styles.prompt}>›</span>
        <span className={styles.cmd}>git push origin main</span>
        <span className={styles.blink} aria-hidden />
      </div>
    </div>
  );
}
