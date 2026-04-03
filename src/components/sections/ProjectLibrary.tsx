import { useState } from "react";
import { CartItem } from "@/types";
import { libraryProjects, libraryFilters } from "@/data/libraryProjects";
import { LibraryCard } from "@/components/ui/LibraryCard";
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
    if (isInCart(id)) {
      onRemove(id);
    } else {
      onAdd({ id, title });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Project
          <br />
          Library
        </h2>
        <p className={styles.subtitle}>
          Uma curadoria de soluções técnicas, arquiteturas de sistema e
          experimentos visuais.
        </p>
      </div>

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
    </section>
  );
}
