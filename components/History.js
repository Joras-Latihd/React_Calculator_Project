import styles from "../styles/Calculator.module.css";

export default function History({ history }) {
  return (
    <div className={styles.history}>
      <h4>History</h4>
      {history.length === 0 && <p>No history yet</p>}
      {history.map((item, idx) => (
        <div key={idx} className={styles.historyItem}>{item}</div>
      ))}
    </div>
  );
}