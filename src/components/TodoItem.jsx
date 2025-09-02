import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
    // if the condition is false, array passes through it without filtering it
    // id the condition is true, item is filtered out and included it the new array
  }

  function handleClick(name) {
    setTodos(
      todos.map(
        (todo) => (todo.name === name ? { ...todo, done: !todo.done } : todo)
        // ...todo, done: !todo.done -> copy the rest of the properties as is and alter the done property only
      )
    );
  }

  const strickthrough = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={strickthrough} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)} //here, callback ft[()=>] is created, so that handleDelete is not called right away
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
