import { Trash } from 'lucide-react';
import React, { FC } from 'react';

import styles from './styles.module.css';

import { Task as TaskShared, useStore, Button } from '@/shared';

export interface TaskProps {
  id: string;
  name: string;
}
export const Task: FC<TaskProps> = React.memo(({ id, name }) => {
  const removeItem = useStore(store => store.removeItem);
  return (
    <TaskShared testId={id}>
      <h1 className={styles.name}>{name}</h1>
      <Button onClick={() => removeItem(id)}>
        <Trash />
      </Button>
    </TaskShared>
  );
});
