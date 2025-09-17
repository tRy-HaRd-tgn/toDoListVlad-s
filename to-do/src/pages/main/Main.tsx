import styles from "./styles.module.css";
import { Header, Footer, List } from "@/widgets";
import { useState } from "react";
export function Main() {
  const [tasks, setTasks] = useState([]);
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header tasks={tasks} setTasks={setTasks} />
        <List tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} setTasks={setTasks} />
      </div>
    </main>
  );
}
