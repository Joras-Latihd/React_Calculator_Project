import "../styles/globals.css";
import styles from "../styles/Calculator.module.css";

export default function MyApp({ Component, pageProps }) {
  const darkMode = false; // initial mode
  return (
    <div className={darkMode ? styles.appContainerDark : styles.appContainer}>
      <Component {...pageProps} />
    </div>
  );
}