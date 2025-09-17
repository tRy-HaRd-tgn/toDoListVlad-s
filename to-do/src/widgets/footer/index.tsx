import { FC } from 'react';

import styles from './styles.module.css';

interface FooterProps {
  tasks: any;
  setTasks: (tasks: any) => void;
}

import { MyButton } from '@/shared';
export const Footer: FC<FooterProps> = ({ tasks, setTasks }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.p}>You have {tasks?.length} pending tasks</p>
        <MyButton onClick={() => setTasks([])}>Clear all</MyButton>
      </div>
    </footer>
  );
};
