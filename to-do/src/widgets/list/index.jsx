import styles from "./styles.module.css";
import { Task } from "@/entities";
export function List({ tasks, setTasks }) {
  return (
    <ul className={styles.list}>
      {tasks.map((task, index) => {
        return (
          <Task
            name={task.name}
            key={index}
            setTasks={setTasks}
            tasks={tasks}
            index={index}
          />
        );
      })}
    </ul>
  );
}
