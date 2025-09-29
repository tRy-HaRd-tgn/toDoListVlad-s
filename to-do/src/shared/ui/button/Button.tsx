import React, { FC } from 'react';

import styles from './styles.module.css';

interface ButtonProps {
  children: React.ReactNode;

  onClick: () => void;
}
export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};
