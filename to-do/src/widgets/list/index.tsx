import { FC } from 'react';

import styles from './styles.module.css';

interface ListProps {
  tasks: any;
  setTasks: (tasks: any) => void;
}

import { Task } from '@/entities';
export const List: FC<ListProps> = ({ tasks, setTasks }) => {
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
};
