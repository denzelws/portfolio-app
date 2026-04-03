import { skills } from "@/data/skills";
import { SkillPill } from "@/components/ui";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section className={styles.section}>
      <div className={`reveal ${styles.pills}`}>
        {skills.map((skill) => (
          <SkillPill key={skill.id} skill={skill} />
        ))}
      </div>
      <div className="divider" />
    </section>
  );
}
