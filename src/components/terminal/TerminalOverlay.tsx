// ─────────────────────────────────────────────
// components/terminal/TerminalOverlay.tsx
// Modal do terminal interativo.
// Recebe tudo do useTerminal via props — zero estado próprio.
// Fecha clicando no backdrop ou pressionando ESC
// (ESC é tratado no próprio useTerminal).
// ─────────────────────────────────────────────

import { useEffect } from "react";
import { TerminalLine as TerminalLineType } from "@/types";
import { TerminalLine } from "@/components/ui";
import styles from "./TerminalOverlay.module.css";

interface TerminalOverlayProps {
  isOpen: boolean;
  lines: TerminalLineType[];
  input: string;
  onInputChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClose: () => void;
  bodyRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export function TerminalOverlay({
  isOpen,
  lines,
  input,
  onInputChange,
  onKeyDown,
  onClose,
  bodyRef,
  inputRef,
}: TerminalOverlayProps) {
  // Trava o scroll do body enquanto o overlay está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // Backdrop — fecha ao clicar fora do terminal
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Terminal interativo"
    >
      {/* Caixa do terminal — para propagação do clique */}
      <div className={styles.terminal} onClick={(e) => e.stopPropagation()}>
        {/* Titlebar */}
        <div className={styles.titlebar}>
          <div className={styles.dots}>
            <button
              className={`${styles.dot} ${styles.dotRed}`}
              onClick={onClose}
              aria-label="Fechar terminal"
            />
            <span className={`${styles.dot} ${styles.dotYellow}`} aria-hidden />
            <span className={`${styles.dot} ${styles.dotGreen}`} aria-hidden />
          </div>
          <span className={styles.title}>portfolio terminal — zsh</span>
          <button className={styles.closeBtn} onClick={onClose}>
            fechar ✕
          </button>
        </div>

        {/* Output — lista de linhas com scroll */}
        <div className={styles.body} ref={bodyRef}>
          {lines.map((line) => (
            <TerminalLine key={line.id} line={line} />
          ))}
        </div>

        {/* Input */}
        <div className={styles.inputRow}>
          <span className={styles.prompt} aria-hidden>
            ›
          </span>
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="digite um comando..."
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="Input do terminal"
          />
        </div>
      </div>
    </div>
  );
}
