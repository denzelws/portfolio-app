import { LibraryProject } from "@/types";

export const libraryProjects: LibraryProject[] = [
  {
    id: "obsidian-os",
    number: "01",
    title: "Obsidian OS",
    description:
      "Dashboard modular para gestão de ativos com dados em tempo real.",
    stack: ["React", "TypeScript", "Redux"],
    category: "frontend",
    href: "#",
  },
  {
    id: "landing-builder",
    number: "02",
    title: "Landing Builder",
    description: "Editor visual drag-and-drop para criação de landing pages.",
    stack: ["React", "TypeScript", "Tailwind"],
    category: "frontend",
    href: "#",
  },
  {
    id: "design-system",
    number: "03",
    title: "Core UI Kit",
    description: "Design system com 40+ componentes documentados no Storybook.",
    stack: ["React", "TypeScript", "Storybook"],
    category: "frontend",
    href: "#",
  },
  {
    id: "core-engine",
    number: "04",
    title: "Core Engine",
    description:
      "API de alto processamento para e-commerce global — 10k req/s.",
    stack: ["Node.js", "GraphQL", "PostgreSQL"],
    category: "backend",
    href: "#",
  },
  {
    id: "auth-service",
    number: "05",
    title: "Auth Service",
    description:
      "Microserviço de autenticação com JWT, refresh tokens e Redis.",
    stack: ["Node.js", "TypeScript", "Redis"],
    category: "backend",
    href: "#",
  },
  {
    id: "notification-hub",
    number: "06",
    title: "Notification Hub",
    description:
      "Sistema de notificações em tempo real via WebSocket e queues.",
    stack: ["Node.js", "WebSocket", "PostgreSQL"],
    category: "backend",
    href: "#",
  },
  {
    id: "booking-app",
    number: "07",
    title: "Booking App",
    description:
      "Sistema de agendamento completo com painel admin e calendário.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    category: "fullstack",
    href: "#",
  },
  {
    id: "saas-starter",
    number: "08",
    title: "SaaS Starter",
    description: "Boilerplate SaaS com auth, billing Stripe e multi-tenancy.",
    stack: ["Next.js", "TypeScript", "Stripe"],
    category: "fullstack",
    href: "#",
  },
  {
    id: "vortex-ui",
    number: "09",
    title: "Vortex UI",
    description: "Biblioteca de componentes com renderização procedural WebGL.",
    stack: ["React", "WebGL", "TypeScript"],
    category: "fullstack",
    href: "#",
  },
];

export const libraryFilters = [
  "All",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
];
