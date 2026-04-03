import styles from "./Button.module.css";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps {
  variant?: ButtonVariant;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

export function Button({
  variant = "primary",
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${styles.btn} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
