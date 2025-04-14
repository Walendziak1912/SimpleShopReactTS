import { ReactNode, MouseEvent } from "react";
import styles from "./FullWidthButton.module.css";

interface FullWidthButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  isBlack?: boolean;
}

export function FullWidthButton({
  children,
  onClick,
  isBlack = false,
}: FullWidthButtonProps) {
  return (
    <button
      className={`${styles.button} ${isBlack ? styles.black : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
