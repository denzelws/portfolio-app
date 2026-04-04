import { Command, TerminalLine } from "@/types";

let _lineId = 0;
const id = () => `line-${++_lineId}`;

const out = (content: string): TerminalLine => ({
  id: id(),
  type: "output",
  content,
});
const accent = (content: string): TerminalLine => ({
  id: id(),
  type: "accent",
  content,
});
const success = (content: string): TerminalLine => ({
  id: id(),
  type: "success",
  content,
});
const warning = (content: string): TerminalLine => ({
  id: id(),
  type: "warning",
  content,
});
const muted = (content: string): TerminalLine => ({
  id: id(),
  type: "muted",
  content,
});
const err = (content: string): TerminalLine => ({
  id: id(),
  type: "error",
  content,
});

const GITHUB_URL = "https://github.com/denzelws/telemetry-dashboard/tree/main";

export const commands: Command[] = [
  {
    name: "help",
    description: "list all available commands",
    handler: () => [
      warning("available commands:"),
      out(""),
      out("  whoami              about me"),
      out("  ls projects/        list projects"),
      out("  cd telemetry/       climate monitoring system"),
      out("  cd react/           React / Next.js projects"),
      out("  cd api/             API / Backend projects"),
      out("  cd fullstack/       Full Stack projects"),
      out("  code telemetry      open telemetry on GitHub ↗"),
      out("  skills              full tech stack"),
      out("  contact             get in touch"),
      out("  clear               clear terminal"),
      out(""),
      muted("tip: try 'cd telemetry/' to start."),
    ],
  },

  {
    name: "whoami",
    description: "about me",
    handler: () => [
      success("Denzel Washington — Full Stack Developer"),
      out(""),
      out("  main stack      React · Node.js · TypeScript"),
      out("  location        Rio de Janeiro, BR"),
      out("  availability    open for projects in 2025"),
      out("  english         C1 fluent"),
      out(""),
      muted("use 'contact' to reach me."),
    ],
  },

  {
    name: "ls",
    description: "list directory",
    handler: (args) => {
      const path = args[0] ?? "";
      if (path === "projects/" || path === "projects") {
        return [accent("telemetry/   react/   api/   fullstack/")];
      }
      return [out("projects/    status.txt    README.md")];
    },
  },

  {
    name: "cd",
    description: "navigate between project directories",
    handler: (args) => {
      const dir = args[0] ?? "";
      const key = dir.endsWith("/") ? dir : `${dir}/`;

      const dirs: Record<string, TerminalLine[]> = {
        "telemetry/": [
          muted("~/projects/telemetry-dashboard"),
          out(""),
          success("Intelligent Climate Monitoring System"),
          out(""),
          out("  arch        event-driven microservices"),
          out("  collector   Python → fetches Open-Meteo every 10s"),
          out("  broker      RabbitMQ → decoupling & resilience"),
          out("  worker      Golang → high-performance queue consumer"),
          out("  backend     NestJS · JWT · Google Gemini AI · MongoDB"),
          out("  frontend    React · Vite · Shadcn/ui · Recharts"),
          out("  infra       Docker · Docker Compose"),
          out(""),
          accent("  → 'code telemetry' to open on GitHub"),
        ],
        "react/": [
          muted("~/projects/react"),
          out(""),
          success("telemetry-frontend/  "),
          out("Real-time dashboard · React · Vite · Shadcn/ui"),
          success("obsidian-os/         "),
          out("Asset management dashboard · React · TypeScript"),
        ],
        "api/": [
          muted("~/projects/api"),
          out(""),
          success("telemetry-backend/   "),
          out("NestJS REST API · JWT · Gemini AI · MongoDB"),
          success("telemetry-worker/    "),
          out("Queue consumer · Golang · AMQP"),
          success("telemetry-collector/ "),
          out("Data collector · Python · RabbitMQ"),
        ],
        "fullstack/": [
          muted("~/projects/fullstack"),
          out(""),
          success("telemetry-dashboard/ "),
          out("Distributed climate monitoring · 4 languages · AI"),
        ],
      };

      if (dirs[key]) return dirs[key];
      if (dir === ".." || dir === "") return [muted("~/")];
      return [err(`cd: ${dir}: directory not found`)];
    },
  },

  {
    name: "code",
    description: "open project on GitHub",
    handler: (args) => {
      const project = args[0] ?? "";

      const repos: Record<string, string> = {
        telemetry: GITHUB_URL,
        "telemetry-dashboard": GITHUB_URL,
      };

      const url = repos[project];

      if (!url) {
        return [
          err(`code: '${project}' not found`),
          out(""),
          out("  available:  telemetry"),
        ];
      }

      setTimeout(() => window.open(url, "_blank", "noopener,noreferrer"), 300);

      return [success(`opening ${project} on GitHub...`), accent(`  → ${url}`)];
    },
  },

  {
    name: "skills",
    description: "full tech stack",
    handler: () => [
      warning("tech stack:"),
      out(""),
      out("  frontend    React · Next.js · TypeScript · Tailwind"),
      out("  backend     NestJS · Node.js · GraphQL · MongoDB"),
      out("  other       Golang · Python · RabbitMQ · Docker"),
      out("  infra       Docker Compose · GitHub Actions · Vercel"),
    ],
  },

  {
    name: "contact",
    description: "get in touch",
    handler: () => [
      warning("where to find me:"),
      out(""),
      out("  email       denzelws@email.com"),
      out("  github      github.com/denzelws"),
      out("  linkedin    linkedin.com/in/denzelws"),
    ],
  },

  {
    name: "cat",
    description: "read file content",
    handler: (args) => {
      const file = args[0] ?? "";
      const files: Record<string, TerminalLine[]> = {
        "status.txt": [
          success("available for new projects in 2025."),
          out("focused on high-quality web products."),
          out("open to freelance, contract and CLT positions."),
        ],
        "README.md": [
          warning("# portfolio — denzel washington"),
          out(""),
          out("full stack developer focused on"),
          out("elegant interfaces and robust systems."),
          out(""),
          muted("use 'help' to explore this terminal."),
        ],
      };
      if (files[file]) return files[file];
      return [err(`cat: ${file}: file not found`)];
    },
  },
];

export const commandMap = new Map<string, Command>(
  commands.map((cmd) => [cmd.name, cmd]),
);
