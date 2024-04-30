import { AbsoluteImg } from "@/components/common";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 relative pb-10 sm:pb-20 lg:pb-40">
      <div className="space-y-5 md:pt-20 min-w-fit">
        <h1 className="text-center md:text-start text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold md:leading-[40.5px] lg:leading-[60.5px] xl:leading-[70.5px] md:max-w-[361px] lg:max-w-[541px] xl:max-w-[721px]">
          <span className="bg-gradient-to-r from-[#4B86FC] to-[#75F2F6] bg-clip-text text-transparent">
            MyPay&nbsp;
          </span>
          Plateforme de gestion{" "}
          <span className="font-medium">
            de paiements en ligne pour business High-Risk.
          </span>
        </h1>
        <p className="text-sm font-medium text-[#E1E1E1] leading-5 lg:leading-6 text-justify md:text-start pb-1.5 md:pb-5 md:max-w-[350px] lg:max-w-[500px] xl:max-w-[557px]">
          Business High-Risk pris en charge : Servitia Financia et Investitiones
          , Mercator es titulorum Pecuniae mutuatae ad diem Mercatores cryptae
          valutarum. Servitia Financia et Investitiones , Mercator es titulorum
          Pecuniae mutuatae ad diem Mercatores cryptae valutarum.
        </p>
        <button className="w-fit bg-gradient-to-r from-[#4B86FC] to-[#75F2F6] p-[2px] rounded-full">
          <div className="h-full w-full p-2.5 lg:p-3.5 flex items-center justify-center gap-2.5 bg-[#00020D] rounded-full">
            <span className="font-medium text-base lg:text-xl uppercase bg-gradient-to-r from-[#4B86FC] to-[#75F2F6] bg-clip-text text-transparent pl-2.5">
              commencer
            </span>
            <Image
              src="/button-arrow-color-icon.png"
              width={37}
              height={37}
              className="w-[25px] h-auto lg:w-[37px]"
              alt=""
            />
          </div>
        </button>
      </div>

      <div className="relative pt-10 md:pt-0">
        <Image
          src="/side-hero.svg"
          width={448}
          height={449}
          className="w-full md:w-[380px] lg:w-[448px] h-auto"
          alt=""
        />
        <AbsoluteImg
          img="/robot-hand.svg"
          className="hidden md:block -bottom-28 -right-6 lg:-bottom-40 lg:-right-16"
          imgClass="w-[619px] h-auto"
        />
      </div>
    </section>
  );
};
