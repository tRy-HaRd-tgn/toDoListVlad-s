import React, { FC } from 'react';

import styles from './styles.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  testId?: string;
}
export const Button: FC<ButtonProps> = ({ children, onClick, testId }) => {
  return (
    <button
      data-testid={`button-${testId}`}
      className={styles.button}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};
