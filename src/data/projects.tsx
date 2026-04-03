import type { Project } from "@/types";

const ObsidianArt = () => (
  <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <polygon
      points="240,30 420,240 60,240"
      fill="none"
      stroke="rgba(124,106,245,0.3)"
      strokeWidth="1"
    />
    <polygon
      points="240,80 380,230 100,230"
      fill="none"
      stroke="rgba(124,106,245,0.18)"
      strokeWidth="1"
    />
    <polygon
      points="240,130 330,220 150,220"
      fill="none"
      stroke="rgba(124,106,245,0.09)"
      strokeWidth="1"
    />
    <line
      x1="240"
      y1="30"
      x2="240"
      y2="240"
      stroke="rgba(124,106,245,0.12)"
      strokeWidth="0.5"
    />
    <line
      x1="60"
      y1="240"
      x2="420"
      y2="240"
      stroke="rgba(124,106,245,0.12)"
      strokeWidth="0.5"
    />
    <circle cx="240" cy="30" r="3" fill="rgba(124,106,245,0.7)" />
    <circle cx="60" cy="240" r="3" fill="rgba(124,106,245,0.35)" />
    <circle cx="420" cy="240" r="3" fill="rgba(124,106,245,0.35)" />
  </svg>
);

const CoreEngineArt = () => (
  <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect
      x="60"
      y="40"
      width="160"
      height="190"
      fill="none"
      stroke="rgba(124,106,245,0.25)"
      strokeWidth="1"
    />
    <rect
      x="100"
      y="80"
      width="80"
      height="110"
      fill="none"
      stroke="rgba(124,106,245,0.14)"
      strokeWidth="1"
    />
    <rect
      x="260"
      y="60"
      width="160"
      height="150"
      fill="none"
      stroke="rgba(124,106,245,0.25)"
      strokeWidth="1"
    />
    <line
      x1="60"
      y1="135"
      x2="260"
      y2="135"
      stroke="rgba(124,106,245,0.1)"
      strokeWidth="0.5"
      strokeDasharray="4,4"
    />
    <line
      x1="300"
      y1="40"
      x2="300"
      y2="210"
      stroke="rgba(124,106,245,0.1)"
      strokeWidth="0.5"
      strokeDasharray="4,4"
    />
    <circle cx="140" cy="135" r="4" fill="rgba(124,106,245,0.6)" />
    <circle cx="300" cy="135" r="4" fill="rgba(124,106,245,0.35)" />
  </svg>
);

const VortexArt = () => (
  <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle
      cx="240"
      cy="135"
      r="90"
      fill="none"
      stroke="rgba(124,106,245,0.25)"
      strokeWidth="1"
    />
    <circle
      cx="240"
      cy="135"
      r="60"
      fill="none"
      stroke="rgba(124,106,245,0.15)"
      strokeWidth="1"
    />
    <circle
      cx="240"
      cy="135"
      r="30"
      fill="none"
      stroke="rgba(124,106,245,0.08)"
      strokeWidth="1"
    />
    <circle cx="240" cy="135" r="4" fill="rgba(124,106,245,0.8)" />
    <circle cx="240" cy="45" r="3" fill="rgba(124,106,245,0.4)" />
    <circle cx="330" cy="135" r="3" fill="rgba(124,106,245,0.4)" />
    <circle cx="240" cy="225" r="3" fill="rgba(124,106,245,0.4)" />
    <circle cx="150" cy="135" r="3" fill="rgba(124,106,245,0.4)" />
    <line
      x1="60"
      y1="135"
      x2="420"
      y2="135"
      stroke="rgba(124,106,245,0.08)"
      strokeWidth="0.5"
    />
    <line
      x1="240"
      y1="20"
      x2="240"
      y2="250"
      stroke="rgba(124,106,245,0.08)"
      strokeWidth="0.5"
    />
  </svg>
);

// ── Dataset ───────────────────────────────────

export const projects: Project[] = [
  {
    id: "obsidian-os",
    title: "Obsidian OS",
    tag: "// react · typescript",
    description:
      "Dashboard minimalista para gestão de ativos focado em investidores de alto risco. Totalmente modular.",
    href: "#",
    ArtComponent: ObsidianArt,
  },
  {
    id: "core-engine",
    title: "Core Engine",
    tag: "// node.js · graphql",
    description:
      "API de alto processamento para e-commerce global, lidando com mais de 10k requisições por segundo.",
    href: "#",
    ArtComponent: CoreEngineArt,
  },
  {
    id: "vortex-ui",
    title: "Vortex UI",
    tag: "// webgl · shaders",
    description:
      "Biblioteca de componentes experimentais baseada em renderização procedural e física de partículas.",
    href: "#",
    ArtComponent: VortexArt,
  },
];
