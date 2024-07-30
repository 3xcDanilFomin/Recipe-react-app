import { IHint } from "../../../types/types";
import { HintItem } from "../HintItem";
import styles from "./styles.module.scss";

interface HintListProps {
  hintsList: IHint[];
  typeIcon?: "pepper" | "cook";
}

export const HintList: React.FC<HintListProps> = ({ hintsList, typeIcon }) => {
  return (
    <ul className={styles["list"]}>
      {hintsList.map((hint) => (
        <HintItem
          key={hint.level}
          typeIcon={typeIcon}
          countIcons={hint.countIcons}
          level={hint.level}
          description={hint.description}
        />
      ))}
    </ul>
  );
};
