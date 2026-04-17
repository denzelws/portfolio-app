import { EmptyLibrary, LibraryCard } from "@/components/ui";
import { libraryFilters, libraryProjects } from "@/data/libraryProjects";
import { useLocale } from "@/hooks/useLocale";
import { CartItem } from "@/types";
import { useState } from "react";
import styles from "./ProjectLibrary.module.css";

interface ProjectLibraryProps {
  isInCart: (id: string) => boolean;
  onAdd: (item: CartItem) => void;
  onRemove: (id: string) => void;
}

export function ProjectLibrary({
  isInCart,
  onAdd,
  onRemove,
}: ProjectLibraryProps) {
  const { t } = useLocale();
  const [activeFilter, setActiveFilter] = useState("All");

  const translatedProjects = libraryProjects.map((project) => ({
    ...project,
    title: t(`libraryProjects.${project.id}.title`),
    description: t(`libraryProjects.${project.id}.description`),
    category: t(`libraryProjects.${project.id}.category`),
  }));

  const filtered =
    activeFilter === "All"
      ? translatedProjects
      : translatedProjects.filter((p) => p.stack.includes(activeFilter));

  const handleToggle = (id: string, title: string) => {
    if (isInCart(id)) onRemove(id);
    else onAdd({ id, title });
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {t("library.title_line1")}
          <br />
          {t("library.title_line2")}
        </h2>
        <p className={styles.subtitle}>{t("library.subtitle")}</p>
      </div>

      {libraryProjects.length > 0 && (
        <div className={styles.filterBar}>
          {libraryFilters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.filterActive : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {activeFilter === filter ? (
                <>
                  <span className={styles.bracket}>[</span> {filter}{" "}
                  <span className={styles.bracket}>]</span>
                </>
              ) : (
                filter
              )}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <EmptyLibrary />
      ) : (
        <div className={styles.grid}>
          {filtered.map((project, index) => (
            <LibraryCard
              key={project.id}
              project={project}
              index={index}
              inCart={isInCart(project.id)}
              onToggle={() => handleToggle(project.id, project.title)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
