import { FC, useState } from 'react';

import styles from './styles.module.css';

import { MyInput, MyButton, useStore } from '@/shared';
export const Header: FC = () => {
  const [taskName, setTaskName] = useState('');
  const { addItem } = useStore();
  return (
    <header className={styles.header}>
      <p className={styles.p}>Todo App</p>
      <div className={styles.container}>
        <MyInput
          value={taskName}
          onChange={(e: any) => setTaskName(e.target?.value)}
          placeholder={'Add your new todo'}
        />
        <MyButton
          onClick={() => {
            if (taskName.trim()) {
              addItem(taskName.trim());
              setTaskName('');
            }
          }}
        >
          +
        </MyButton>
      </div>
    </header>
  );
};
