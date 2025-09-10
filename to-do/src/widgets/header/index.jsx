import styles from "./styles.module.css";
import { MyInput, MyButton } from "../../shared";
export const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.p}>Todo App</p>
      <div className={styles.container}>
        <MyInput />
        <MyButton>+</MyButton>
      </div>
    </header>
  );
};
