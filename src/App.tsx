import { useTerminal } from "@/hooks/useTerminal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCursor } from "@/hooks/useCursor";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/useToast";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { ProjectLibrary } from "@/components/sections/ProjectLibrary";

import { TerminalOverlay } from "@/components/terminal/TerminalOverlay";
import { CartWidget } from "@/components/ui/CartWidget";
import { Toast } from "@/components/ui/Toast";

const PREVIEW_LINE_COUNT = 8;

export default function App() {
  const terminal = useTerminal();
  const { dotRef, ringRef } = useCursor();
  const cart = useCart();
  const toast = useToast();

  useScrollReveal();

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden />
      <div className="cursor-ring" ref={ringRef} aria-hidden />

      <Navbar onTerminalOpen={terminal.open} />

      <main>
        <Hero
          previewLines={terminal.lines.slice(0, PREVIEW_LINE_COUNT)}
          onTerminalOpen={terminal.open}
        />
        <Skills />
        <Projects />
        <ProjectLibrary
          isInCart={cart.isInCart}
          onAdd={cart.add}
          onRemove={cart.remove}
        />
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

      <CartWidget
        items={cart.items}
        onRemove={cart.remove}
        onClear={cart.clear}
      />

      <Toast visible={toast.visible} onDismiss={toast.dismiss} />
    </>
  );
}
