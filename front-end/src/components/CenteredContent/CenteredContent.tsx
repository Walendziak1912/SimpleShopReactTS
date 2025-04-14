import { ReactNode } from "react";
import styles from "./CenteredContent.module.css";

interface CenteredContentProps {
  children: ReactNode;
}

export function CenteredContent({ children }: CenteredContentProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
