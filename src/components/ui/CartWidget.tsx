import { useState } from "react";
import { CartItem } from "@/types";
import { CartDrawer } from "./CartDrawer";
import styles from "./CardWidget.module.css";

interface CartWidgetProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export function CartWidget({ items, onRemove }: CartWidgetProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (items.length === 0) return null;

  return (
    <>
      <div
        className={styles.widget}
        onClick={() => setDrawerOpen(true)}
        role="button"
        aria-label="Ver projetos selecionados"
      >
        {/* Desktop — layout terminal */}
        <div className={styles.desktop}>
          <div className={styles.termBar}>
            <div className={styles.dots}>
              <span className={`${styles.dot} ${styles.dotR}`} />
              <span className={`${styles.dot} ${styles.dotY}`} />
              <span className={`${styles.dot} ${styles.dotG}`} />
            </div>
            <span className={styles.termLabel}>session_v1.0</span>
          </div>
          <div className={styles.termBody}>
            <div className={styles.termLine}>
              <span className={styles.prompt}>›</span>
              <span className={styles.termSelected}>
                {items.length}{" "}
                {items.length === 1 ? "item selected" : "items selected"}
              </span>
            </div>
            {items.slice(0, 3).map((item) => (
              <div key={item.id} className={styles.termItem}>
                <span className={styles.termDash}>--</span>
                <span className={styles.termItemName}>{item.title}</span>
              </div>
            ))}
            {items.length > 3 && (
              <div className={styles.termItem}>
                <span className={styles.termDash}>--</span>
                <span className={styles.termItemName}>
                  +{items.length - 3} more
                </span>
              </div>
            )}
          </div>
          <div className={styles.termFooter}>
            <span className={styles.openHint}>click to open ↗</span>
          </div>
        </div>

        {/* Mobile — pill compacta */}
        <div className={styles.mobile}>
          <div className={styles.avatars}>
            {items.slice(0, 2).map((item, i) => (
              <div
                key={item.id}
                className={styles.avatar}
                style={{ zIndex: 2 - i }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            ))}
            {items.length > 2 && (
              <div className={`${styles.avatar} ${styles.avatarOverflow}`}>
                +{items.length - 2}
              </div>
            )}
          </div>
          <div className={styles.divider} />
          <span className={styles.compareLabel}>
            compare <span className={styles.arrow}>›</span>
          </span>
        </div>
      </div>

      <CartDrawer
        isOpen={drawerOpen}
        items={items}
        onClose={() => setDrawerOpen(false)}
        onRemove={onRemove}
      />
    </>
  );
}
