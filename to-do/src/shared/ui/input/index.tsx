import { FC } from 'react';

import styles from './styles.module.css';

interface MyInputProps {
  value: string;
  onChange: (e: any) => void;
}

export const MyInput: FC<MyInputProps> = ({ value, onChange }) => {
  return <input className={styles.input} value={value} onChange={onChange} />;
};
