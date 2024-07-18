import styles from "./styles.module.scss";

interface CategoryItemProps {
  title: string;
  image: string;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ title, image }) => {
  return (
    <div className={styles["category"]}>
      <img className={styles["category__img"]} src={image} />
      <h3 className={styles["category__title"]}>{title}</h3>
    </div>
  );
};
