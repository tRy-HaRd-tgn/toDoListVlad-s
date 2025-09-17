import styles from "./styles.module.css";
import { MyButton } from "../../../shared/button";
import { Trash } from "lucide-react";
export function Task({ name, props, setTasks, tasks, index }: any) {
  return (
    <li className={styles.task} {...props}>
      <h1 className={styles.name}>{name}</h1>
      <MyButton
        onClick={() =>
          setTasks((tasks = tasks.filter((task: any, i: any) => i !== index)))
        }
      >
        <Trash />
      </MyButton>
    </li>
  );
}
