import React, { useState, createContext } from "react";

export const CalculatorContext = createContext({
  currentOperand: "", // The current operand being entered by the user.
  operator: null, // The current operator selected by the user.
  previousOperand: "", // The previous operand used in the calculation.
  result: "", // The result of the calculation.
});

export const CalculatorProvider = ({ children }) => {
  const [currentOperand, setCurrentOperand] = useState("");
  const [operator, setOperator] = useState(null);
  const [previousOperand, setPreviousOperand] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (number) => {
    setCurrentOperand(`${currentOperand}${number}`);
  };

  const handleOperatorClick = (operator) => {
    setOperator(operator);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
  };

  const handleEqualsClick = () => {
    const newResult = calculate(previousOperand, operator, currentOperand);
    setResult(newResult);
    setPreviousOperand("");
    setCurrentOperand("");
  };

  const calculate = (previousOperand, operator, currentOperand) => {
    switch (operator) {
      case "+":
        return parseFloat(previousOperand) + parseFloat(currentOperand);
      case "-":
        return parseFloat(previousOperand) - parseFloat(currentOperand);
      case "*":
        return parseFloat(previousOperand) * parseFloat(currentOperand);
      case "/":
        return parseFloat(previousOperand) / parseFloat(currentOperand);
      default:
        return 0;
    }
  };

  return (
    <CalculatorContext.Provider
      value={{
        currentOperand,
        operator,
        previousOperand,
        result,
        handleNumberClick,
        handleOperatorClick,
        handleEqualsClick,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  return React.useContext(CalculatorContext);
};
