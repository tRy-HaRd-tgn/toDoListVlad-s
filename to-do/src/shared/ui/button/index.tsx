import React, { FC } from 'react';

import styles from './styles.module.css';

interface MyButtonProps {
  children: React.ReactNode;

  onClick: () => void;
}
export const MyButton: FC<MyButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};
