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
  const offset: number = 100 / (values.length - 1);

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

    const currentInputRef = inputRef.current;
    if (currentInputRef) {
      currentInputRef.addEventListener("touchend", handleTouchEnd);
    }

    if (currentInputRef) {
      const progress = (valueInput / (max - min)) * 100;
      currentInputRef.style.setProperty("--progress-width", `${progress}%`);
    }

    return () => {
      if (currentInputRef) {
        currentInputRef.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [valueInput, min, max]);

  const rangeList = "rangeList";

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
        list={rangeList}
      />
      <datalist id={rangeList} className={styles["datalist"]}>
        {new Array(values.length).fill(0).map((_, i) => (
          <option
            key={i}
            className={styles["datalist__option"]}
            value={i * offset}
          />
        ))}
      </datalist>
      <span className={styles["wrapper__text"]}>{values[indexArray]}</span>
    </div>
  );
};
