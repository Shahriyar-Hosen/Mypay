"use client";

import { sliderImage } from "@/lib/constants";
import { FC } from "react";
import Slider from "react-slick";
import { SectionTitle } from "./section-title";

// Import css files
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { cn } from "@/lib/utils";

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
      {sliderImage.map(({ img, label, height, width }, i) => (
        <div key={i} className="w-full min-h-[75px]">
          <div className="flex justify-center items-center">
            <Image
              src={img}
              alt={label}
              width={width}
              height={height}
              className={cn(
                "mx-auto my-auto",
                label === "Mastercard" && "py-[12.5px]"
              )}
            />
          </div>
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
