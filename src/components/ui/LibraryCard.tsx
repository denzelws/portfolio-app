import { LibraryProject } from "@/types";
import styles from "./LibraryCard.module.css";

interface LibraryCardProps {
  project: LibraryProject;
  index: number;
  inCart: boolean;
  onToggle: () => void;
}

export function LibraryCard({
  project,
  index,
  inCart,
  onToggle,
}: LibraryCardProps) {
  return (
    <article
      className={`reveal ${styles.card}`}
      style={{ "--delay": `${index * 60}ms` } as React.CSSProperties}
    >
      <div className={styles.imageWrap}>
        <div className={styles.imagePlaceholder}>
          <span className={styles.projectNumber}>{project.number}</span>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.category}>
            {project.number} / {(project.category || "").toUpperCase()}
          </span>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.stack}>
            {project.stack.map((s) => (
              <span key={s} className={styles.stackPill}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <button
          className={`${styles.addBtn} ${inCart ? styles.added : ""}`}
          onClick={onToggle}
          aria-label={
            inCart
              ? `Remover ${project.title} do carrinho`
              : `Adicionar ${project.title} ao carrinho`
          }
        >
          {inCart ? (
            <>
              <span className={styles.btnBracket}>[x]</span> added
            </>
          ) : (
            <>
              <span className={styles.btnBracket}>[ ]</span> add_to_build
            </>
          )}
        </button>
      </div>
    </article>
  );
}
