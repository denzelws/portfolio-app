import { useState, useCallback, useEffect, useRef } from "react";
import { TerminalLine } from "@/types";
import { commandMap } from "@/data/commands";

interface UseTerminalReturn {
  lines: TerminalLine[];
  input: string;
  setInput: (value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  clear: () => void;
  bodyRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

let _id = 0;
const uid = () => `t-${++_id}`;

const makeCommandLine = (raw: string): TerminalLine => ({
  id: uid(),
  type: "command",
  content: raw,
});

const WELCOME_LINES: TerminalLine[] = [
  {
    id: uid(),
    type: "muted",
    content: "Portfolio CLI v1.0 — type `help` to see commands",
  },
  { id: uid(), type: "output", content: "" },
  { id: uid(), type: "command", content: "whoami" },
  {
    id: uid(),
    type: "success",
    content: "Denzel Washington — Full Stack Developer",
  },
  { id: uid(), type: "output", content: "" },
  { id: uid(), type: "command", content: "ls projects/" },
  {
    id: uid(),
    type: "accent",
    content: "telemetry/   react/   api/   fullstack/",
  },
  { id: uid(), type: "output", content: "" },
  {
    id: uid(),
    type: "muted",
    content: "try 'cd telemetry/' or 'code telemetry'",
  },
  { id: uid(), type: "output", content: "" },
];

export function useTerminal(): UseTerminalReturn {
  const [lines, setLines] = useState<TerminalLine[]>(WELCOME_LINES);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const commandHistory = useRef<string[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (bodyRef.current)
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  const processCommand = useCallback((raw: string) => {
    const trimmed = raw.trim().toLowerCase();
    const newLines: TerminalLine[] = [makeCommandLine(raw.trim())];

    if (!trimmed) {
      setLines((prev) => [...prev, ...newLines]);
      return;
    }

    commandHistory.current = [trimmed, ...commandHistory.current].slice(0, 50);
    setHistoryIndex(-1);

    if (trimmed === "clear") {
      setLines([{ id: uid(), type: "muted", content: "terminal cleared." }]);
      return;
    }

    const parts = trimmed.split(/\s+/);
    const name = parts[0];
    const args = parts.slice(1);
    const command = commandMap.get(name);

    const outputLines: TerminalLine[] = command
      ? command.handler(args)
      : [
          {
            id: uid(),
            type: "error",
            content: `command not found: ${name} — try \`help\``,
          },
        ];

    setLines((prev) => [
      ...prev,
      ...newLines,
      ...outputLines,
      { id: uid(), type: "output", content: "" },
    ]);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        processCommand(input);
        setInput("");
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        const next = Math.min(
          historyIndex + 1,
          commandHistory.current.length - 1,
        );
        setHistoryIndex(next);
        setInput(commandHistory.current[next] ?? "");
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = Math.max(historyIndex - 1, -1);
        setHistoryIndex(next);
        setInput(next === -1 ? "" : (commandHistory.current[next] ?? ""));
        return;
      }
    },
    [input, historyIndex, processCommand],
  );

  const clear = useCallback(() => {
    setLines([{ id: uid(), type: "muted", content: "terminal cleared." }]);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 120);
  }, []);

  return {
    lines,
    input,
    setInput,
    handleKeyDown,
    clear,
    bodyRef,
    isOpen,
    open,
    close,
    inputRef,
  };
}
