import styles from "./AvatarStrip.module.css";

export function AvatarStrip() {
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
          <span className={styles.badge}>Disponível</span>
        </div>
        <span className={styles.role}>Full Stack Developer</span>
        <span className={styles.stack}>
          React · Next.js · TypeScript · Inglês C1
        </span>
      </div>
    </div>
  );
}
