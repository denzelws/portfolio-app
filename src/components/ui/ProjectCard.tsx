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
  const { title, tag, description, href, ArtComponent, image, comingSoon } =
    project;

  const handleImageClick = () => {
    if (!comingSoon) window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className={`reveal ${styles.card} ${comingSoon ? styles.comingSoon : ""} ${className}`}
      style={{ "--delay": `${revealDelay}ms` } as React.CSSProperties}
    >
      <div
        className={styles.art}
        onClick={handleImageClick}
        role={comingSoon ? undefined : "link"}
        aria-label={comingSoon ? undefined : `Abrir ${title}`}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className={styles.artImage}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <ArtComponent />
        )}
      </div>

      <p className={styles.tag}>{tag}</p>
      <h3 className={`${styles.title} ${comingSoon ? styles.titleMuted : ""}`}>
        {title}
      </h3>
      <p className={styles.description}>{description}</p>

      {!comingSoon && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label={`Ver estudo de caso de ${title}`}
        >
          View Case Study
          <ArrowIcon />
        </a>
      )}
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
