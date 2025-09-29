import { FC } from 'react';

import styles from './styles.module.css';

interface InputProps {
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
}

export const Input: FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className={styles.input}
      value={value}
      onChange={onChange}
    />
  );
};
