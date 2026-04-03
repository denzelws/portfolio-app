import { Skill } from "@/types";
import styles from "./SkillPill.module.css";

interface SkillPillProps {
  skill: Skill;
  className?: string;
}

export function SkillPill({ skill, className = "" }: SkillPillProps) {
  return (
    <span
      className={`${styles.pill} ${styles[skill.variant]} ${className}`}
      aria-label={`Skill: ${skill.label}`}
    >
      {skill.label}
    </span>
  );
}
