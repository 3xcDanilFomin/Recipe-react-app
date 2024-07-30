import { IHints } from "../../types/types";
import { Drawer } from "../UI/Drawer";
import { HintList } from "./HintList";
import styles from "./styles.module.scss";

interface HintsProps {
  isShow: boolean;
  showHints: (isOpen: boolean) => void;
  hints: IHints;
  typeIcon?: "pepper" | "cook";
}

export const Hints: React.FC<HintsProps> = ({
  isShow,
  showHints,
  hints,
  typeIcon,
}) => {
  return (
    <Drawer isOpen={isShow} setIsOpen={showHints}>
      <div className={styles["hints"]}>
        <h5 className={styles["hints__title"]}>{hints.title}</h5>
        <p className={styles["hints__text"]}>{hints.subtitle}</p>
        {hints.hintsList && (
          <HintList typeIcon={typeIcon} hintsList={hints.hintsList} />
        )}
      </div>
    </Drawer>
  );
};
