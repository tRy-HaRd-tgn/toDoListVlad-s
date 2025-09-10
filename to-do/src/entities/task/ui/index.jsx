import styles from "./styles.module.css";
import { MyButton } from "../../../shared/button";
import { Trash } from "lucide-react";
export const Task = ({ name, props, setTasks, tasks, index }) => {
  return (
    <li className={styles.task} {...props}>
      <h1 className={styles.name}>{name}</h1>
      <MyButton
        onClick={() =>
          setTasks((tasks = tasks.filter((task, i) => i !== index)))
        }
      >
        <Trash />
      </MyButton>
    </li>
  );
};
