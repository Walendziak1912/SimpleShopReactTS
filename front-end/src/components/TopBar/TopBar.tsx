import { ReactNode } from "react";
import styles from "./TopBar.module.css";

interface TopBarProps {
  children: ReactNode;
}

export function TopBar({ children }: TopBarProps) {
  return <div className={styles.topBar}>{children}</div>;
}
