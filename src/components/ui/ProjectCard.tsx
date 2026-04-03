import { Project } from "@/types";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  revealDelay?: number;
  className?: string;
}

export function ProjectCard({
  project,
  revealDelay = 0,
  className = "",
}: ProjectCardProps) {
  const { title, tag, description, href, ArtComponent } = project;

  return (
    <article
      className={`reveal ${styles.card} ${className}`}
      style={{ "--delay": `${revealDelay}ms` } as React.CSSProperties}
    >
      <div className={styles.art} aria-hidden>
        <ArtComponent />
      </div>

      <p className={styles.tag}>{tag}</p>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        aria-label={`Ver estudo de caso de ${title}`}
      >
        Ver Estudo de Caso
        <ArrowIcon />
      </a>
    </article>
  );
}

function ArrowIcon() {
  return (
    <svg
      className={styles.arrow}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
