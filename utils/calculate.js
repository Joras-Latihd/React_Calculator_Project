export default function calculate(input, value, result, memory) {
  let newInput = input;
  let newResult = result;
  let newMemory = memory;

  switch (value) {
    case "AC":
      newInput = "";
      newResult = "";
      break;
    case "C":
      newInput = newInput.slice(0, -1);
      break;
    case "=":
      try {
        // Evaluate basic math and advanced operators
        let exp = newInput.replace("√", "Math.sqrt");
        exp = exp.replace("^", "**");
        newResult = eval(exp).toString();
        newInput = newResult;
      } catch {
        newResult = "Error";
      }
      break;
    case "M+":
      newMemory += parseFloat(result || input || 0);
      break;
    case "M-":
      newMemory -= parseFloat(result || input || 0);
      break;
    case "MR":
      newInput += newMemory.toString();
      break;
    case "+/-":
      if (newInput) {
        newInput =
          newInput.startsWith("-")
            ? newInput.slice(1)
            : "-" + newInput;
      }
      break;
    default:
      newInput += value;
  }

  return { newInput, newResult, newMemory };
}