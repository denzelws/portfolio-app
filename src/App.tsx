import { useTerminal } from "@/hooks/useTerminal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCursor } from "@/hooks/useCursor";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";

import { TerminalOverlay } from "@/components/terminal/TerminalOverlay";

const PREVIEW_LINE_COUNT = 8;

export default function App() {
  const terminal = useTerminal();
  const { dotRef, ringRef } = useCursor();

  useScrollReveal();

  const previewLines = terminal.lines.slice(0, PREVIEW_LINE_COUNT);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden />
      <div className="cursor-ring" ref={ringRef} aria-hidden />

      <Navbar onTerminalOpen={terminal.open} />

      <main>
        <Hero previewLines={previewLines} onTerminalOpen={terminal.open} />
        <Skills />
        <Projects />
      </main>

      <Footer />

      <TerminalOverlay
        isOpen={terminal.isOpen}
        lines={terminal.lines}
        input={terminal.input}
        onInputChange={terminal.setInput}
        onKeyDown={terminal.handleKeyDown}
        onClose={terminal.close}
        bodyRef={terminal.bodyRef}
        inputRef={terminal.inputRef}
      />
    </>
  );
}
