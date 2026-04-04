import { useState } from "react";
import { CartItem } from "@/types";
import { libraryProjects, libraryFilters } from "@/data/libraryProjects";
import { LibraryCard, EmptyLibrary } from "@/components/ui";
import { t } from "@/i18n/i18n";
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
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? libraryProjects
      : libraryProjects.filter((p) => p.stack.includes(activeFilter));

  const handleToggle = (id: string, title: string) => {
    if (isInCart(id)) onRemove(id);
    else onAdd({ id, title });
  };

  const [titleLine1, titleLine2] = t.library.title.split("\n");

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {titleLine1}
          <br />
          {titleLine2}
        </h2>
        <p className={styles.subtitle}>{t.library.subtitle}</p>
      </div>

      {libraryProjects.length > 0 && (
        <div className={styles.filterBar}>
          {libraryFilters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${
                activeFilter === filter ? styles.filterActive : ""
              }`}
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
