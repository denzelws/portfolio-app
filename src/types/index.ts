import type { ComponentType } from "react";

export interface Project {
  /** Identificador único, usado como React key */
  id: string;

  /** Título exibido no card — ex: "Obsidian OS" */
  title: string;

  /**
   * Tag de tecnologia — exibida em uppercase acima do título.
   * Formato livre: "// react · typescript"
   */
  tag: string;

  /** Descrição curta (1-2 linhas) */
  description: string;

  /** URL do case study ou repositório */
  href: string;

  /**
   * Arte SVG gerada como componente React.
   * Cada projeto tem uma arte geométrica única.
   */
  ArtComponent: ComponentType;
}

// ── Skills ────────────────────────────────────

export type SkillVariant = "active" | "muted";

export interface Skill {
  id: string;
  label: string;
  variant: SkillVariant;
}

// ── Terminal ──────────────────────────────────

export type TerminalLineType =
  | "command" // linha digitada pelo usuário
  | "output" // resposta do sistema
  | "accent" // output destacado (roxo)
  | "success" // output verde
  | "warning" // output amarelo
  | "error" // output vermelho
  | "muted"; // output apagado / comentário

export interface TerminalLine {
  id: string;
  type: TerminalLineType;
  content: string;
}

/**
 * Uma função de comando recebe os argumentos
 * e retorna as linhas de output a serem exibidas.
 */
export type CommandHandler = (args: string[]) => TerminalLine[];

export interface Command {
  name: string;
  description: string;
  handler: CommandHandler;
}

// ── Navegação ─────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

// ── Props comuns ──────────────────────────────

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface VariantProps<T extends string> extends BaseProps {
  variant?: T;
}
