import styles from "./inlinecomponent.module.css";

//const header = { color: "blue", fontSize: "140px" };
export default function InlineComponent() {
  return (
    <div>
      {/* <h1 style={header}>inline component</h1> */}
      <h1 className={styles.header}>inline component</h1>
    </div>
  );
}
