import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { CategoryItem } from "./CategoryItem";
import { ICategory } from "../../types/types";

import firstCoursesImg from "../../assets/image/categories/first-course.jpeg";
import secondCoursesImg from "../../assets/image/categories/second-courses.jpeg";
import saladsImg from "../../assets/image/categories/salads.jpeg";
import snacksImg from "../../assets/image/categories/snacks.jpeg";
import bakeryImg from "../../assets/image/categories/bakery.jpeg";
import saucesImg from "../../assets/image/categories/sauces.jpeg";
import preservesImg from "../../assets/image/categories/preserves.jpeg";
import drinksImg from "../../assets/image/categories/drinks.jpeg";
import dessertsImg from "../../assets/image/categories/desserts.jpeg";
import garnishImg from "../../assets/image/categories/garnish.jpeg";
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
