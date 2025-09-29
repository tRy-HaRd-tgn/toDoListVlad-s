import { FC } from 'react';

import styles from './styles.module.css';

interface InputProps {
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
  testId?: string;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  testId,
}) => {
  return (
    <input
      data-testid={`input-${testId}`}
      placeholder={placeholder}
      className={styles.input}
      value={value}
      onChange={onChange}
    />
  );
};
