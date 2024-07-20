import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { CategoryItem } from "./CategoryItem";
import { ICategory } from "../../types/types";

import firstCoursesImg from "../../assets/image/categories/first-course.webp";
import secondCoursesImg from "../../assets/image/categories/second-courses.webp";
import saladsImg from "../../assets/image/categories/salads.webp";
import snacksImg from "../../assets/image/categories/snacks.webp";
import bakeryImg from "../../assets/image/categories/bakery.webp";
import saucesImg from "../../assets/image/categories/sauces.webp";
import preservesImg from "../../assets/image/categories/preserves.webp";
import drinksImg from "../../assets/image/categories/drinks.webp";
import dessertsImg from "../../assets/image/categories/desserts.webp";
import garnishImg from "../../assets/image/categories/garnish.webp";
import styles from "./styles.module.scss";

const categories: ICategory[] = [
  {
    title: "Первые блюда",
    imgPath: firstCoursesImg,
  },
  {
    title: "Вторые блюда",
    imgPath: secondCoursesImg,
  },
  {
    title: "Салаты",
    imgPath: saladsImg,
  },
  {
    title: "Закуски",
    imgPath: snacksImg,
  },
  {
    title: "Выпечка",
    imgPath: bakeryImg,
  },
  {
    title: "Соусы и маринады",
    imgPath: saucesImg,
  },
  {
    title: "Заготовки",
    imgPath: preservesImg,
  },
  {
    title: "Напитки",
    imgPath: drinksImg,
  },
  {
    title: "Десерты",
    imgPath: dessertsImg,
  },
  {
    title: "Гарниры",
    imgPath: garnishImg,
  },
];

export const Categories: React.FC = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      modules={[EffectCoverflow]}
      loop={true}
      className={styles["swiper_container"]}
    >
      {categories.map((category) => (
        <SwiperSlide className={styles["swiper_slide"]} key={category.title}>
          <CategoryItem image={category.imgPath} title={category.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
