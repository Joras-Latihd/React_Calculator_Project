import styles from "../styles/Calculator.module.css";

export default function ModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className={styles.modeToggle}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}