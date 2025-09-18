import { Trash } from 'lucide-react';
import { FC } from 'react';

import styles from './styles.module.css';

export interface TaskProps {
  id: string;
  name: string;
}

import { useStore, MyButton } from '@/shared';
export const Task: FC<TaskProps> = ({ id, name }) => {
  const { removeItem } = useStore();
  return (
    <li className={styles.task}>
      <h1 className={styles.name}>{name}</h1>
      <MyButton onClick={() => removeItem(id)}>
        <Trash />
      </MyButton>
    </li>
  );
};
