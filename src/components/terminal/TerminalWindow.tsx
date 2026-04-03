import { TerminalLine as TerminalLineType } from "@/types";
import { TerminalLine } from "@/components/ui";
import styles from "./TerminalWindow.module.css";

interface TerminalWindowProps {
  lines: TerminalLineType[];
  className?: string;
}

export function TerminalWindow({ lines, className = "" }: TerminalWindowProps) {
  return (
    <div
      className={`${styles.window} ${className}`}
      role="img"
      aria-label="Terminal de exemplo"
    >
      <div className={styles.titlebar}>
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.dotRed}`} aria-hidden />
          <span className={`${styles.dot} ${styles.dotYellow}`} aria-hidden />
          <span className={`${styles.dot} ${styles.dotGreen}`} aria-hidden />
        </div>
        <span className={styles.title}>zsh — 80x24</span>
      </div>

      <div className={styles.body}>
        {lines.map((line) => (
          <TerminalLine key={line.id} line={line} />
        ))}

        <div className={styles.cursorRow} aria-hidden>
          <span className={styles.prompt}>›</span>
          <span className={styles.cursor} />
        </div>
      </div>
    </div>
  );
}
