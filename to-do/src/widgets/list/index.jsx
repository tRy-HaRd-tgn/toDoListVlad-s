import styles from "./styles.module.css";
import { Task } from "../../entities/task";
export const List = () => {
  return (
    <ul className={styles.list}>
      <Task name="Task 1" />
      <Task name="Task 2" />
      <Task name="Task 3" />
      <Task name="Task 4" />
    </ul>
  );
};
