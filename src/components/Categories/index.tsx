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
];

export const Categories: React.FC = () => {
  return (
    <div className={styles["carousel"]}>
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
          <SwiperSlide className={styles["swiper-slide"]}>
            <CategoryItem image={category.imgPath} title={category.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
