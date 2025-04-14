import { ReactNode } from "react";
import styles from "./FlexContainer.module.css";

interface FlexContainerProps {
  children: ReactNode;
}

export function FlexContainer({ children }: FlexContainerProps) {
  return <div className={styles.flexContainer}>{children}</div>;
}
