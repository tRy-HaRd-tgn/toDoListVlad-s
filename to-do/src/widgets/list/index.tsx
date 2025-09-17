import styles from './styles.module.css';

import { Task } from '@/entities';
export function List({ tasks, setTasks }: any) {
  return (
    <ul className={styles.list}>
      {tasks.map((task: any, index: any) => {
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
