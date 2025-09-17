import React, { FC } from 'react';

import styles from './styles.module.css';

interface TaskProps {
  children: React.ReactNode;
}

export const Task: FC<TaskProps> = ({ children }) => {
  return <li className={styles.task}>{children}</li>;
};
