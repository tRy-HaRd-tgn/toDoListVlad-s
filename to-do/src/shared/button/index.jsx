import styles from "./styles.module.css";
export const MyButton = ({ children, props }) => {
  return (
    <button className={styles.button} {...props}>
      <span>{children}</span>
    </button>
  );
};
