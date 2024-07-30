import { IHint } from "../../../types/types";
import { IconsLine } from "../../IconsLine";
import styles from "./styles.module.scss";

interface HintItemProps extends IHint {
  typeIcon?: "pepper" | "cook";
}

export const HintItem: React.FC<HintItemProps> = ({
  countIcons,
  description,
  level,
  typeIcon,
}) => {
  return (
    <li className={styles["item"]}>
      <IconsLine type={typeIcon} count={countIcons} />
      <p className={styles["item__text"]}>
        <strong>Уровень {level}:</strong> {description}
      </p>
    </li>
  );
};
