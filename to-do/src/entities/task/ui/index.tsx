import { Trash } from 'lucide-react';
import { FC } from 'react';

import styles from './styles.module.css';

interface TaskProps {
  name: string;
  setTasks: (tasks: any) => void;
  tasks: any;
  index: any;
}
import { MyButton } from '@/shared';
export const Task: FC<TaskProps> = ({ name, setTasks, tasks, index }) => {
  return (
    <li className={styles.task}>
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
};
