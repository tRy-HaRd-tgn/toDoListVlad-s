import styles from "./styles.module.css";
import { MyButton } from "../../shared";
export const Footer = ({ tasks }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.p}>You have {tasks?.length} pending tasks</p>
        <MyButton>Clear all</MyButton>
      </div>
    </footer>
  );
};
