import { libraryProjects } from "@/data/libraryProjects";
import { useLocale } from "@/hooks/useLocale";
import { CartItem, LibraryProject } from "@/types";
import { useEffect } from "react";
import styles from "./CartDrawer.module.css";

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

function getProject(id: string): LibraryProject | undefined {
  return libraryProjects.find((p) => p.id === id);
}

export function CartDrawer({
  isOpen,
  items,
  onClose,
  onRemove,
}: CartDrawerProps) {
  const { t } = useLocale();

  const getMessage = (): string[] => {
    const n = items.length;
    if (n === 0) return [];
    if (n === 1)
      return [
        t("cart_messages.one_0"),
        t("cart_messages.one_1"),
        t("cart_messages.one_2"),
      ];
    if (n <= 3)
      return [
        t("cart_messages.few_0"),
        t("cart_messages.few_1", { count: n }),
        t("cart_messages.few_2"),
        t("cart_messages.few_3"),
      ];
    return [
      t("cart_messages.many_0"),
      t("cart_messages.many_1", { count: n }),
      t("cart_messages.many_2"),
      t("cart_messages.many_3"),
    ];
  };

  const getHeader = () => {
    if (items.length === 0) return t("cart.none");
    if (items.length === 1) return t("cart.selected_one");
    return t("cart.selected_many", { count: items.length });
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const message = getMessage();

  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
        onClick={onClose}
        aria-hidden
      />
      <aside
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={getHeader()}
      >
        <div className={styles.titlebar}>
          <div className={styles.dots}>
            <span
              className={`${styles.dot} ${styles.dotRed}`}
              onClick={onClose}
              role="button"
              aria-label="close"
            />
            <span className={`${styles.dot} ${styles.dotYellow}`} aria-hidden />
            <span className={`${styles.dot} ${styles.dotGreen}`} aria-hidden />
          </div>
          <span className={styles.titlebarLabel}>{t("cart.build_config")}</span>
          <button className={styles.closeBtn} onClick={onClose}>
            {t("terminal.close")}
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.header}>
            <span className={styles.prompt}>›</span>
            <span className={styles.headerText}>{getHeader()}</span>
          </div>

          <div className={styles.list}>
            {items.length === 0 ? (
              <p className={styles.empty}>
                {t("cart.empty_hint")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {i === 1 ? (
                        <span className={styles.emptyAccent}>{line}</span>
                      ) : (
                        line
                      )}
                      {i === 0 && <br />}
                    </span>
                  ))}
              </p>
            ) : (
              items.map((item) => {
                const project = getProject(item.id);
                return (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.cartItemInfo}>
                      <span className={styles.cartItemTitle}>{item.title}</span>
                      {project && (
                        <span className={styles.cartItemStack}>
                          {project.stack.join(" · ")}
                        </span>
                      )}
                    </div>
                    <button
                      className={styles.removeBtn}
                      onClick={() => onRemove(item.id)}
                      aria-label={`remove ${item.title}`}
                    >
                      [x]
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {message.length > 0 && (
            <div className={styles.message}>
              {message.map((line, i) => (
                <p
                  key={i}
                  className={`${styles.messageLine} ${i === 0 ? styles.messageAccent : ""}`}
                >
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
