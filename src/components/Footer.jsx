import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos, todosLeft }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed to-dos: {completedTodos}</span>
      <span className={styles.item}>Total to-dos: {totalTodos}</span>
      <span className={styles.item}>To-dos Left: {todosLeft}</span>
    </div>
  );
}
