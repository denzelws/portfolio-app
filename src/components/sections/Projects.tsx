import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section className={styles.section} id="projetos">
      <p className={`reveal ${styles.label}`}>// projetos selecionados</p>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            revealDelay={index * 100}
          />
        ))}
      </div>
    </section>
  );
}
