import React, { FC } from 'react';

import styles from './styles.module.css';
interface TaskProps {
  children: React.ReactNode;
  testId?: string;
}
export const Task: FC<TaskProps> = ({ children, testId }) => {
  return (
    <li className={styles.task} data-testid={`list-item-${testId}`}>
      {children}
    </li>
  );
};
