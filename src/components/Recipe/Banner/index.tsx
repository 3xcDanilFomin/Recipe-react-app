import { IRecipe } from "../../../types/types";
import styles from "./styles.module.scss";

interface BannerProps {
  recipe: IRecipe | undefined;
}

export const Banner: React.FC<BannerProps> = ({ recipe }) => {
  return (
    <img
      className={styles["banner"]}
      src={recipe?.imagePath}
      alt={recipe?.title}
    />
  );
};
