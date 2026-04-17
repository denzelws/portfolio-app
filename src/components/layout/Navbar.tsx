import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLocale } from "@/hooks/useLocale";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onTerminalOpen: () => void;
}

export function Navbar({ onTerminalOpen }: NavbarProps) {
  const { t } = useLocale();
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
            {t("nav.about")}
          </a>
        </li>
        <li>
          <a href="#projetos" className={`${styles.link} ${styles.active}`}>
            {t("nav.projects")}
          </a>
        </li>
        <li>
          <a href="#contato" className={styles.link}>
            {t("nav.contact")}
          </a>
        </li>
      </ul>
      <div className={styles.actions}>
        <LanguageToggle />
        <button className={styles.terminalBtn} onClick={onTerminalOpen}>
          {t("nav.terminal")}
        </button>
      </div>
    </nav>
  );
}
