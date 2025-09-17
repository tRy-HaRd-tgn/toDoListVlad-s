import styles from "./styles.module.css";
export const MyInput = ({ value, onChange }: any) => {
  return <input className={styles.input} value={value} onChange={onChange} />;
};
