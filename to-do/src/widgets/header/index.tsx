import { FC, useState } from 'react';

import styles from './styles.module.css';

interface HeaderProps {
  tasks: any;
  setTasks: (tasks: any) => void;
}

import { MyInput, MyButton } from '@/shared';
export const Header: FC<HeaderProps> = ({ tasks, setTasks }) => {
  const [taskName, setTaskName] = useState('');
  return (
    <header className={styles.header}>
      <p className={styles.p}>Todo App</p>
      <div className={styles.container}>
        <MyInput
          value={taskName}
          onChange={(e: any) => setTaskName(e.target?.value)}
        />
        <MyButton
          onClick={() => {
            if (taskName.trim()) {
              setTasks([...tasks, { name: taskName.trim() }]);
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
