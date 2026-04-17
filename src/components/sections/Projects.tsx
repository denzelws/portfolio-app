import { ProjectCard } from "@/components/ui";
import { projects } from "@/data/projects";
import { useLocale } from "@/hooks/useLocale";
import styles from "./Projects.module.css";

export function Projects() {
  const { t } = useLocale();

  const translatedProjects = projects.map((project) => ({
    ...project,
    title: t(`projects.${project.id}.title`),
    tag: t(`projects.${project.id}.tag`),
    description: t(`projects.${project.id}.description`),
  }));

  return (
    <section className={styles.section} id="projetos">
      <p className={`reveal ${styles.label}`}>// {t("nav.projects")}</p>
      <div className={styles.grid}>
        {translatedProjects.map((project, index) => (
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
