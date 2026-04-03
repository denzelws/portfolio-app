import { TerminalLine as TerminalLineType } from "@/types";
import { Button } from "@/components/ui";
import styles from "./Hero.module.css";
import { TerminalWindow } from "../terminal/TerminalWindow";
import { AvatarStrip } from "../ui/AvatarStrip";

interface HeroProps {
  previewLines: TerminalLineType[];
  onTerminalOpen: () => void;
}

export function Hero({ previewLines, onTerminalOpen }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.terminalWrap}>
        <TerminalWindow lines={previewLines} />
      </div>

      <div className={styles.avatarWrap}>
        <AvatarStrip />
      </div>

      <div className={styles.ctas}>
        <Button
          variant="primary"
          onClick={() =>
            document
              .getElementById("projetos")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Ver projetos
        </Button>
        <Button variant="ghost" onClick={onTerminalOpen}>
          $ explorar
        </Button>
      </div>
    </section>
  );
}
