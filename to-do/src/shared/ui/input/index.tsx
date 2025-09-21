import { FC } from 'react';

import styles from './styles.module.css';

interface MyInputProps {
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
}

export const MyInput: FC<MyInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className={styles.input}
      value={value}
      onChange={onChange}
    />
  );
};
