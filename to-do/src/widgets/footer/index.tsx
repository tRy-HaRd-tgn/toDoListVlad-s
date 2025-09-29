import { FC } from 'react';

import styles from './styles.module.css';

import { Button, useStore } from '@/shared';
export const Footer: FC = () => {
  const { list, reset } = useStore();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.p}>You have {list?.length} pending tasks</p>
        <Button onClick={() => reset()}>Clear all</Button>
      </div>
    </footer>
  );
};
