import { FC } from 'react';

import styles from './styles.module.css';

import { Header, Footer, List } from '@/widgets';
export const Main: FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <List />
        <Footer />
      </div>
    </main>
  );
};
