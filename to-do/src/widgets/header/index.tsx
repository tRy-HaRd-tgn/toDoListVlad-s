import { FC, useState } from 'react';

import styles from './styles.module.css';

import { Input, Button, useStore } from '@/shared';
export const Header: FC = () => {
  const [taskName, setTaskName] = useState('');
  const { addItem } = useStore();
  return (
    <header className={styles.header}>
      <p className={styles.p}>Todo App</p>
      <div className={styles.container}>
        <Input
          value={taskName}
          onChange={(e: any) => setTaskName(e.target?.value)}
          placeholder={'Add your new todo'}
        />
        <Button
          onClick={() => {
            if (taskName.trim()) {
              addItem(taskName.trim());
              setTaskName('');
            }
          }}
        >
          +
        </Button>
      </div>
    </header>
  );
};
