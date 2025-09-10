import styles from "./styles.module.css";
import { MyButton } from "../../../shared/button";
import { Trash } from "lucide-react";
export const Task = ({ name, props }) => {
  return (
    <li className={styles.task} {...props}>
      <h1 className={styles.name}>{name}</h1>
      <MyButton>
        <Trash />
      </MyButton>
    </li>
  );
};
