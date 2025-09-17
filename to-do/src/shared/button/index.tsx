import styles from "./styles.module.css";
export const MyButton = ({ children, props, onClick }: any) => {
  return (
    <button className={styles.button} {...props} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};
