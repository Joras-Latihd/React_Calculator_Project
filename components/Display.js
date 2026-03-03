import styles from "../styles/Calculator.module.css";

export default function Display({ input, result, memory }) {
  return (
    <div className={styles.display}>
      {memory !== 0 && <div className={styles.memory}>M: {memory}</div>}
      <div className={styles.input}>{input || "0"}</div>
      <div className={styles.result}>{result}</div>
    </div>
  );
}