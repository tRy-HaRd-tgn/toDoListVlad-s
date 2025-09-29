import React from 'react';

import styles from './styles.module.css';
interface TaskProps {
  children: React.ReactNode;
  testId?: string;
}
export const Task = ({ children, testId }: TaskProps) => {
  return (
    <li className={styles.task} data-testid={`list-item-${testId}`}>
      {children}
    </li>
  );
};
