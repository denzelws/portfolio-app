import { TerminalLine as TerminalLineType } from "@/types";
import { useLocale } from "@/hooks/useLocale";
import { Button, AvatarStrip } from "@/components/ui";
import styles from "./Hero.module.css";
import { TerminalWindow } from "../terminal/TerminalWindow";

interface HeroProps {
  previewLines: TerminalLineType[];
  onTerminalOpen: () => void;
}

export function Hero({ previewLines, onTerminalOpen }: HeroProps) {
  const { t } = useLocale();
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
          {t("hero.cta_projects")}
        </Button>
        <Button variant="ghost" onClick={onTerminalOpen}>
          {t("hero.cta_explore")}
        </Button>
      </div>
    </section>
  );
}
