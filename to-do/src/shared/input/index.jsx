import styles from "./styles.module.css";
export const MyInput = ({ props }) => {
  return <input className={styles.input} {...props} />;
};
