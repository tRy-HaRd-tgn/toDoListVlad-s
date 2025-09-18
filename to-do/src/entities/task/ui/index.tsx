import { Trash } from 'lucide-react';
import { FC } from 'react';

import styles from './styles.module.css';

interface TaskProps {
  name: string;
  index: any;
}
import { MyButton } from '@/shared';
import { useStore } from '@/shared';
export const Task: FC<TaskProps> = ({ name }) => {
  const { removeItem } = useStore();
  return (
    <li className={styles.task}>
      <h1 className={styles.name}>{name}</h1>
      <MyButton onClick={() => removeItem(name)}>
        <Trash />
      </MyButton>
    </li>
  );
};
