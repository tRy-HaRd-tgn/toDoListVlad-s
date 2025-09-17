import styles from "./styles.module.css";
import { MyInput, MyButton } from "@/shared";
import { useState } from "react";
export function Header({ tasks, setTasks }: any) {
  const [taskName, setTaskName] = useState("");
  return (
    <header className={styles.header}>
      <p className={styles.p}>Todo App</p>
      <div className={styles.container}>
        <MyInput
          value={taskName}
          onChange={(e: any) => setTaskName(e.target.value)}
        />
        <MyButton
          onClick={() => {
            setTasks([...tasks, { name: taskName }]);
            setTaskName("");
          }}
        >
          +
        </MyButton>
      </div>
    </header>
  );
}
