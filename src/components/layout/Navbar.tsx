import styles from "./Navbar.module.css";

interface NavbarProps {
  onTerminalOpen: () => void;
}

export function Navbar({ onTerminalOpen }: NavbarProps) {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logo}>
        <span className={styles.accent}>$</span>
        D/Z
        <span className={styles.cursor}>_</span>
      </a>

      <ul className={styles.links}>
        <li>
          <a href="#sobre" className={styles.link}>
            sobre
          </a>
        </li>
        <li>
          <a href="#projetos" className={`${styles.link} ${styles.active}`}>
            projetos
          </a>
        </li>
        <li>
          <a href="#contato" className={styles.link}>
            contato
          </a>
        </li>
      </ul>

      <button className={styles.terminalBtn} onClick={onTerminalOpen}>
        $ terminal
      </button>
    </nav>
  );
}
