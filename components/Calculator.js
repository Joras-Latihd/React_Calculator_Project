import { useState, useEffect } from "react";
import Button from "./Button";
import Display from "./Display";
import History from "./History";
import ModeToggle from "./ModeToggle";
import calculate from "../utils/calculate";
import styles from "../styles/Calculator.module.css";

// All buttons
const buttons = [
  "AC", "C", "M+", "M-", "MR",
  "7", "8", "9", "/", "√",
  "4", "5", "6", "*", "^",
  "1", "2", "3", "-", "%",
  "0", ".", "+/-", "+", "="
];

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [memory, setMemory] = useState(0);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Handle keyboard input
  useEffect(() => {
    const handleKey = (e) => {
      const key = e.key;
      if (/[0-9+\-*/.=]/.test(key)) handleClick(key);
      if (key === "Enter") handleClick("=");
      if (key === "Backspace") handleClick("C");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [input]);

  // Handle button click
  const handleClick = (value) => {
    const { newInput, newResult, newMemory } = calculate(
      input,
      value,
      result,
      memory
    );

    // Add to history if "=" pressed
    if (value === "=" && newResult !== "") {
      setHistory([`${input} = ${newResult}`, ...history.slice(0, 9)]);
    }

    setInput(newInput);
    setResult(newResult);
    setMemory(newMemory);
  };

  return (
    <div className={darkMode ? styles.calculatorDark : styles.calculator}>
      
      {/* Header box */}
      <div className={styles.headerBox}>
        Calculator by Saroj DTL
      </div>

      {/* Dark/Light mode toggle */}
      <ModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Display input/result/memory */}
      <Display input={input} result={result} memory={memory} />

      {/* Buttons grid */}
      <div className={styles.buttonGrid}>
        {buttons.map((btn, idx) => (
          <Button key={idx} value={btn} onClick={() => handleClick(btn)} />
        ))}
      </div>

      {/* Calculation history */}
      <History history={history} />
    </div>
  );
}