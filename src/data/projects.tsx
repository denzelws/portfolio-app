import { Project } from "@/types";

const ComingSoonArt = ({ label }: { label: string }) => (
  <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <line
      x1="40"
      y1="135"
      x2="440"
      y2="135"
      stroke="rgba(124,106,245,0.08)"
      strokeWidth="0.5"
      strokeDasharray="6,4"
    />
    <line
      x1="240"
      y1="20"
      x2="240"
      y2="250"
      stroke="rgba(124,106,245,0.08)"
      strokeWidth="0.5"
      strokeDasharray="6,4"
    />
    <rect
      x="140"
      y="90"
      width="200"
      height="90"
      rx="8"
      fill="rgba(124,106,245,0.04)"
      stroke="rgba(124,106,245,0.18)"
      strokeWidth="0.8"
      strokeDasharray="5,3"
    />
    <text
      x="240"
      y="128"
      textAnchor="middle"
      fill="rgba(124,106,245,0.5)"
      fontSize="11"
      fontFamily="monospace"
      letterSpacing="0.15em"
    >
      // coming soon
    </text>
    <text
      x="240"
      y="150"
      textAnchor="middle"
      fill="rgba(124,106,245,0.25)"
      fontSize="10"
      fontFamily="monospace"
      letterSpacing="0.08em"
    >
      {label}
    </text>
  </svg>
);

const TelemetryArt = () => (
  <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle
      cx="240"
      cy="135"
      r="14"
      fill="none"
      stroke="rgba(124,106,245,0.7)"
      strokeWidth="1.5"
    />
    <circle cx="240" cy="135" r="4" fill="rgba(124,106,245,0.9)" />
    <circle
      cx="100"
      cy="75"
      r="10"
      fill="none"
      stroke="rgba(124,106,245,0.4)"
      strokeWidth="1"
    />
    <circle cx="100" cy="75" r="3" fill="rgba(124,106,245,0.5)" />
    <circle
      cx="380"
      cy="75"
      r="10"
      fill="none"
      stroke="rgba(124,106,245,0.4)"
      strokeWidth="1"
    />
    <circle cx="380" cy="75" r="3" fill="rgba(124,106,245,0.5)" />
    <circle
      cx="100"
      cy="195"
      r="10"
      fill="none"
      stroke="rgba(124,106,245,0.4)"
      strokeWidth="1"
    />
    <circle cx="100" cy="195" r="3" fill="rgba(124,106,245,0.5)" />
    <circle
      cx="380"
      cy="195"
      r="10"
      fill="none"
      stroke="rgba(124,106,245,0.4)"
      strokeWidth="1"
    />
    <circle cx="380" cy="195" r="3" fill="rgba(124,106,245,0.5)" />
    <line
      x1="110"
      y1="82"
      x2="226"
      y2="124"
      stroke="rgba(124,106,245,0.2)"
      strokeWidth="0.8"
      strokeDasharray="4,3"
    />
    <line
      x1="370"
      y1="82"
      x2="254"
      y2="124"
      stroke="rgba(124,106,245,0.2)"
      strokeWidth="0.8"
      strokeDasharray="4,3"
    />
    <line
      x1="110"
      y1="188"
      x2="226"
      y2="146"
      stroke="rgba(124,106,245,0.2)"
      strokeWidth="0.8"
      strokeDasharray="4,3"
    />
    <line
      x1="370"
      y1="188"
      x2="254"
      y2="146"
      stroke="rgba(124,106,245,0.2)"
      strokeWidth="0.8"
      strokeDasharray="4,3"
    />
    <text
      x="100"
      y="58"
      textAnchor="middle"
      fill="rgba(124,106,245,0.35)"
      fontSize="9"
      fontFamily="monospace"
    >
      python
    </text>
    <text
      x="380"
      y="58"
      textAnchor="middle"
      fill="rgba(124,106,245,0.35)"
      fontSize="9"
      fontFamily="monospace"
    >
      golang
    </text>
    <text
      x="100"
      y="218"
      textAnchor="middle"
      fill="rgba(124,106,245,0.35)"
      fontSize="9"
      fontFamily="monospace"
    >
      nestjs
    </text>
    <text
      x="380"
      y="218"
      textAnchor="middle"
      fill="rgba(124,106,245,0.35)"
      fontSize="9"
      fontFamily="monospace"
    >
      react
    </text>
    <text
      x="240"
      y="160"
      textAnchor="middle"
      fill="rgba(124,106,245,0.5)"
      fontSize="9"
      fontFamily="monospace"
    >
      rabbitmq
    </text>
    <circle
      cx="240"
      cy="135"
      r="22"
      fill="none"
      stroke="rgba(124,106,245,0.12)"
      strokeWidth="1"
    />
    <circle
      cx="240"
      cy="135"
      r="32"
      fill="none"
      stroke="rgba(124,106,245,0.06)"
      strokeWidth="1"
    />
  </svg>
);

export const projects: Project[] = [
  {
    id: "telemetry-dashboard",
    title: "Telemetry Dashboard",
    tag: "// react · nestjs · golang · python",
    description:
      "Distributed climate monitoring system in real-time. Event-driven architecture with 4 languages, RabbitMQ and AI insights via Google Gemini.",
    href: "https://github.com/denzelws/telemetry-dashboard/tree/main",
    image: "/projects/telemetry.png",
    ArtComponent: TelemetryArt,
  },
  {
    id: "coming-soon-1",
    title: "Next project",
    tag: "// are coming",
    description: "Something new is being built. Stay tuned.",
    href: "https://github.com/denzelws",
    ArtComponent: () => <ComingSoonArt label="in development" />,
    comingSoon: true,
  },
  {
    id: "coming-soon-2",
    title: "Next project",
    tag: "// are coming",
    description: "Something new is being built. Stay tuned.",
    href: "https://github.com/denzelws",
    ArtComponent: () => <ComingSoonArt label="in development" />,
    comingSoon: true,
  },
];
