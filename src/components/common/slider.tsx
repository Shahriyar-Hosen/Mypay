"use client";

import { sliderImage } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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

type ISlider = { title: string } & IClassName;
export const SliderSection: FC<ISlider> = ({ title, className }) => {
  return (
    <section className="space-y-5 lg:space-y-12">
      <h1
        className={cn(
          "text-xl lg:text-3xl font-semibold text-[#dcdcdc] text-center",
          className
        )}
      >
        {title}
      </h1>
      <FullSlider />
    </section>
  );
};
