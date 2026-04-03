import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} id="contato">
      <span className={styles.copy}>
        © 2025 ~/seuNome • Built with Precision
      </span>
      <nav className={styles.links} aria-label="Links sociais">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          github
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          linkedin
        </a>
        <a
          href="https://layers.to"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          layers
        </a>
      </nav>
    </footer>
  );
}
