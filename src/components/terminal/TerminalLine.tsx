import { TerminalLine as TerminalLineType } from "@/types";
import styles from "./TerminalLine.module.css";

interface TerminalLineProps {
  line: TerminalLineType;
}

export function TerminalLine({ line }: TerminalLineProps) {
  const { type, content } = line;

  if (content === "") {
    return <div className={styles.empty} aria-hidden />;
  }

  if (type === "command") {
    return (
      <div className={styles.row}>
        <span className={styles.prompt} aria-hidden>
          ›
        </span>
        <span className={styles.command}>{content}</span>
      </div>
    );
  }

  return (
    <div className={`${styles.row} ${styles[type]}`}>
      <span>{content}</span>
    </div>
  );
}
