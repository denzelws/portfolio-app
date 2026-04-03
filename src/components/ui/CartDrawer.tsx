import { useEffect } from "react";
import { CartItem, LibraryProject } from "@/types";
import { libraryProjects } from "@/data/libraryProjects";
import styles from "./CartDrawer.module.css";

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

function getProject(id: string): LibraryProject | undefined {
  return libraryProjects.find((p) => p.id === id);
}

function getCreativeMessage(count: number): string[] {
  if (count === 0) return [];
  if (count === 1)
    return [
      "> build.config analisado...",
      "  seleção focada. gosto disso.",
      "  qualidade > quantidade.",
    ];
  if (count <= 3)
    return [
      "> build.config analisado...",
      `  ${count} projetos carregados.`,
      "  stack coverage: excelente.",
      "  você tem bom gosto. vamos conversar?",
    ];
  return [
    "> build.config analisado...",
    `  ${count} projetos no pipeline.`,
    "  ambição detectada.",
    "  stack coverage: full. impressionante.",
  ];
}

export function CartDrawer({
  isOpen,
  items,
  onClose,
  onRemove,
}: CartDrawerProps) {
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const message = getCreativeMessage(items.length);

  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
        onClick={onClose}
        aria-hidden
      />

      <aside
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}
        aria-label="Projetos selecionados"
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.titlebar}>
          <div className={styles.dots}>
            <span
              className={`${styles.dot} ${styles.dotRed}`}
              onClick={onClose}
              role="button"
              aria-label="Fechar"
            />
            <span className={`${styles.dot} ${styles.dotYellow}`} aria-hidden />
            <span className={`${styles.dot} ${styles.dotGreen}`} aria-hidden />
          </div>
          <span className={styles.titlebarLabel}>build.config</span>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Fechar drawer"
          >
            ✕
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.header}>
            <span className={styles.prompt}>›</span>
            <span className={styles.headerText}>
              {items.length === 0
                ? "nenhum projeto selecionado"
                : `${items.length} ${items.length === 1 ? "projeto selecionado" : "projetos selecionados"}`}
            </span>
          </div>

          <div className={styles.list}>
            {items.length === 0 ? (
              <p className={styles.empty}>
                adicione projetos clicando em
                <br />
                <span className={styles.emptyAccent}>[ ] add_to_build</span> nos
                cards abaixo.
              </p>
            ) : (
              items.map((item) => {
                const project = getProject(item.id);
                return (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.cartItemInfo}>
                      <span className={styles.cartItemTitle}>{item.title}</span>
                      {project && (
                        <span className={styles.cartItemStack}>
                          {project.stack.join(" · ")}
                        </span>
                      )}
                    </div>
                    <button
                      className={styles.removeBtn}
                      onClick={() => onRemove(item.id)}
                      aria-label={`Remover ${item.title}`}
                    >
                      [x]
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {message.length > 0 && (
            <div className={styles.message}>
              {message.map((line, i) => (
                <p
                  key={i}
                  className={`${styles.messageLine} ${i === 0 ? styles.messageAccent : ""}`}
                >
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
