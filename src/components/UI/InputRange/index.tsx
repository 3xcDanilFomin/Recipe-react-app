import { useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";

interface InputRangeProps {
  values: string[];
  min: number;
  max: number;
  step: number;
}

export const InputRange: React.FC<InputRangeProps> = ({
  values,
  min,
  max,
  step,
}) => {
  const [valueInput, setValueInput] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(e.target.value);
    setValueInput(value);
  };

  useEffect(() => {
    const handleTouchEnd = () => {
      if (inputRef.current) {
        const roundedValue = Math.round(valueInput);
        setValueInput(roundedValue);
      }
    };

    const changeInput = (e: TouchEvent): void => {
      e.preventDefault();
    };

    const currentInputRef = inputRef.current;
    if (currentInputRef) {
      currentInputRef.addEventListener("touchend", handleTouchEnd);
      currentInputRef.addEventListener("touchmove", changeInput);
    }

    return () => {
      if (currentInputRef) {
        currentInputRef.removeEventListener("touchend", handleTouchEnd);
        currentInputRef.removeEventListener("touchmove", changeInput);
      }
    };
  }, [valueInput]);

  const indexArray = Math.round(valueInput);
  return (
    <div className={styles["wrapper"]}>
      <input
        className={styles["slider"]}
        ref={inputRef}
        type="range"
        min={min}
        max={max}
        step={step}
        value={valueInput}
        onChange={handleChangeValue}
      />
      <span className={styles["wrapper__text"]}>{values[indexArray]}</span>
    </div>
  );
};
