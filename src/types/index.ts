import type { ComponentType } from "react";

export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  href: string;
  ArtComponent: ComponentType;
  image?: string;
  comingSoon?: boolean;
}

export interface LibraryProject {
  id: string;
  number: string;
  title: string;
  description: string;
  stack: string[];
  category: string;
  href: string;
  image?: string;
}

export interface CartItem {
  id: string;
  title: string;
}

export type SkillVariant = "active" | "muted";

export interface Skill {
  id: string;
  label: string;
  variant: SkillVariant;
}

export type TerminalLineType =
  | "command"
  | "output"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "muted";

export interface TerminalLine {
  id: string;
  type: TerminalLineType;
  content: string;
}

export type CommandHandler = (args: string[]) => TerminalLine[];

export interface Command {
  name: string;
  description: string;
  handler: CommandHandler;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface VariantProps<T extends string> extends BaseProps {
  variant?: T;
}
