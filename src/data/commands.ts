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

export const commands: Command[] = [
  {
    name: "help",
    description: "lista todos os comandos disponíveis",
    handler: () => [
      warning("comandos disponíveis:"),
      out(""),
      accent("  whoami        "),
      muted("  sobre mim e disponibilidade"),
      accent("  ls projects/ "),
      muted("  listar todos os projetos"),
      accent("  cd react/    "),
      muted("  projetos React / Next.js"),
      accent("  cd api/      "),
      muted("  projetos de API / Backend"),
      accent("  cd fullstack/"),
      muted("  projetos Full Stack"),
      accent("  skills       "),
      muted("  stack tecnológica completa"),
      accent("  contato      "),
      muted("  formas de me encontrar"),
      accent("  clear        "),
      muted("  limpar o terminal"),
      out(""),
      muted("dica: tente `ls projects/` para começar."),
    ],
  },

  {
    name: "whoami",
    description: "sobre mim e disponibilidade",
    handler: () => [
      success("Denzel Washington — Full Stack Developer"),
      out(""),
      out("  stack principal   React · Node.js · TypeScript"),
      out("  localização       Rio de Janeiro, BR"),
      out("  disponibilidade   aberto para projetos"),
      out(""),
      muted("use `contato` para falar comigo."),
    ],
  },

  {
    name: "ls",
    description: "listar diretório de projetos",
    handler: (args) => {
      const path = args[0] ?? "";

      if (path === "projects/" || path === "projects") {
        return [accent("react/"), accent("api/"), accent("fullstack/")];
      }

      return [accent("projects/"), out("status.txt"), out("README.md")];
    },
  },

  {
    name: "cd",
    description: "navegar entre diretórios de projetos",
    handler: (args) => {
      const dir = args[0] ?? "";

      const dirs: Record<string, TerminalLine[]> = {
        "react/": [
          muted("~/projects/react"),
          out(""),
          success("obsidian-os/"),
          out("  Dashboard de ativos · React · TypeScript"),
          out(""),
          success("dashboard-analytics/"),
          out("  Painel de dados em tempo real · Next.js"),
          out(""),
          success("landing-builder/"),
          out("  Editor visual de landing pages · React"),
        ],
        "api/": [
          muted("~/projects/api"),
          out(""),
          success("core-engine/"),
          out("  API e-commerce 10k req/s · Node.js · GraphQL"),
          out(""),
          success("auth-service/"),
          out("  Microserviço de autenticação · JWT · Redis"),
          out(""),
          success("notification-hub/"),
          out("  Sistema de notificações em tempo real · WS"),
        ],
        "fullstack/": [
          muted("~/projects/fullstack"),
          out(""),
          success("vortex-ui/"),
          out("  Lib de componentes procedurais · WebGL"),
          out(""),
          success("booking-app/"),
          out("  Sistema de agendamento completo · Next.js"),
          out(""),
          success("saas-starter/"),
          out("  Boilerplate SaaS com billing · Stripe"),
        ],
      };

      const key = dir.endsWith("/") ? dir : `${dir}/`;

      if (dirs[key]) return dirs[key];

      if (dir === ".." || dir === "") {
        return [muted("~/")];
      }

      return [err(`cd: ${dir}: diretório não encontrado`)];
    },
  },

  {
    name: "skills",
    description: "stack tecnológica completa",
    handler: () => [
      warning("stack tecnológica:"),
      out(""),
      out("  frontend    React · Next.js · TypeScript · Tailwind"),
      out("  backend     Node.js · Express · GraphQL · PostgreSQL"),
      out("  infra       Docker · GitHub Actions · Vercel · AWS"),
      out("  extras      WebGL · Three.js · Framer Motion"),
    ],
  },

  {
    name: "contato",
    description: "formas de me encontrar",
    handler: () => [
      warning("onde me encontrar:"),
      out(""),
      success("  email     "),
      out("  denzelwashingtonsantana@gmail.com"),
      success("  github    "),
      out("  github.com/denzelws"),
      success("  linkedin  "),
      out("  linkedin.com/in/dzwashington"),
    ],
  },

  {
    name: "cat",
    description: "ler conteúdo de um arquivo",
    handler: (args) => {
      const file = args[0] ?? "";

      const files: Record<string, TerminalLine[]> = {
        "status.txt": [
          success("disponível para novos projetos em 2025."),
          out("foco em produtos web de alta qualidade."),
          out("aberto a freela, contrato e posições CLT."),
        ],
        "README.md": [
          warning("# portfólio — Denzel Washington"),
          out(""),
          out("desenvolvedor full stack com foco em"),
          out("interfaces elegantes e sistemas robustos."),
          out(""),
          muted("use `help` para explorar este terminal."),
        ],
      };

      if (files[file]) return files[file];

      return [err(`cat: ${file}: arquivo não encontrado`)];
    },
  },
];

export const commandMap = new Map<string, Command>(
  commands.map((cmd) => [cmd.name, cmd]),
);
