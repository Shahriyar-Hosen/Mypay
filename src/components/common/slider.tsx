"use client";

import { sliderImage } from "@/lib/constants";
import Image from "next/image";
import { FC } from "react";
import Slider from "react-slick";
import { SectionTitle } from "./section-title";

// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

/**
 * A full-width slider component using `react-slick`. It displays multiple images
 * in a carousel with various configurations, such as dots, autoplay, and responsiveness.
 *
 * @returns {JSX.Element} - The rendered `FullSlider` component.
 */
export const FullSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {sliderImage.map(({ img, label }, i) => (
        <div key={i} className="flex justify-center items-center w-fit h-fit">
          <Image
            src={img}
            alt={label}
            width={75}
            height={75}
            className="mx-auto"
          />
        </div>
      ))}
    </Slider>
  );
};

/**
 * A section component containing a slider with a title.
 *
 * @param {ISlider} props - The props for the `SliderSection` component.
 * @param {string} props.title - The title of the slider section.
 * @param {string} [props.className] - Additional CSS class names for styling (optional).
 * @returns {JSX.Element} - The rendered `SliderSection` component.
 */
type ISlider = { title: string } & IClassName;
export const SliderSection: FC<ISlider> = ({ title, className }) => {
  return (
    <section className="space-y-5 lg:space-y-12">
      <SectionTitle className={className}>{title}</SectionTitle>
      <FullSlider />
    </section>
  );
};
