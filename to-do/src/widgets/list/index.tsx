import { FC } from 'react';

import styles from './styles.module.css';

import { Task } from '@/entities';
import { useStore } from '@/shared';
export const List: FC = () => {
  const { list } = useStore();
  return (
    <ul className={styles.list}>
      {list.map((task: any, index: any) => {
        return <Task name={task} key={index} index={index} />;
      })}
    </ul>
  );
};
