import { FC } from 'react';

import styles from './styles.module.css';

import { Task } from '@/entities';
import { useStore } from '@/shared';

export const List: FC = () => {
  const list = useStore(store => store.list);
  return (
    <ul className={styles.list}>
      {list.map(task => {
        return <Task id={task.id} name={task.name} key={task.id} />;
      })}
    </ul>
  );
};
