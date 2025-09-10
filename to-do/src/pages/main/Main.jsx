import styles from "./styles.module.css";
import { Header, Footer, List } from "../../widgets";
export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <List />
        <Footer tasks={[1, 2, 3, 4]} />
      </div>
    </main>
  );
};
