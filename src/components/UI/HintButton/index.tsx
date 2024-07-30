import styles from "./styles.module.scss";

interface HintButtonProps {
  onClick: () => void;
}

export const HintButton: React.FC<HintButtonProps> = ({ onClick }) => {
  return (
    <button className={styles["btn"]} onClick={onClick}>
      ?
    </button>
  );
};
