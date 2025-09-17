import styles from "./styles.module.css";
export function Task({ children }: { children: React.ReactNode }) {
  return <li className={styles.task}>{children}</li>;
}
