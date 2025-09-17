import styles from "./styles.module.css";
export const Task = ({ children }) => {
  return <li className={styles.task}>{children}</li>;
};
