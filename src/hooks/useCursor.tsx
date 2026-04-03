import { useEffect, useRef } from "react";

export function useCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;
      ring.style.left = `${pos.current.x}px`;
      ring.style.top = `${pos.current.y}px`;
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dot.classList.add("is-hovering");
      ring.classList.add("is-hovering");
    };

    const onLeave = () => {
      dot.classList.remove("is-hovering");
      ring.classList.remove("is-hovering");
    };

    const bindHover = () => {
      document
        .querySelectorAll<HTMLElement>("a, button, .proj-card, .skill-pill")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
        });
    };

    document.addEventListener("mousemove", onMouseMove);
    raf.current = requestAnimationFrame(animate);
    bindHover();

    const mutationObserver = new MutationObserver(bindHover);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf.current);
      mutationObserver.disconnect();
    };
  }, []);

  return { dotRef, ringRef };
}
