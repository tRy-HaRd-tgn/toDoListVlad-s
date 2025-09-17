import styles from "./styles.module.css";
import { MyButton } from "../../shared";
export function Footer({ tasks, setTasks }: any) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.p}>You have {tasks?.length} pending tasks</p>
        <MyButton onClick={() => setTasks([])}>Clear all</MyButton>
      </div>
    </footer>
  );
}
