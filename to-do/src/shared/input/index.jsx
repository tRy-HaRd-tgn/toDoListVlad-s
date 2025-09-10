import styles from "./styles.module.css";
export const MyInput = ({ value, onChange }) => {
  return <input className={styles.input} value={value} onChange={onChange} />;
};
