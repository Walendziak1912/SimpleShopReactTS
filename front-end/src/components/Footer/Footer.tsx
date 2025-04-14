import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <p>Copyright {new Date().getFullYear()}</p>
    </div>
  );
}
