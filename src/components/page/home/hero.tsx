import { AbsoluteImg } from "@/components/common";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 relative">
      <div className="space-y-5">
        <h1 className="text-center md:text-start md:max-w-[470px] lg:max-w-[550px] xl:max-w-[711px] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
          <span className="bg-gradient-to-r from-[#4B86FC] to-[#75F2F6] bg-clip-text text-transparent font-bold">
            MyPay
          </span>
          &nbsp;Plateforme de gestion de paiements en ligne pour business
          High-Risk.
        </h1>
        <p className="text-sm font-medium md:max-w-[557px] text-[#E1E1E1] leading-6 text-justify md:text-start pb-1.5 md:pb-5">
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

      <div className="relative">
        <Image
          src="/side-hero.svg"
          width={448}
          height={449}
          className="w-full md:w-[300px] lg:w-[448px] h-auto"
          alt=""
        />{" "}
        <AbsoluteImg
          img="/robot-hand.svg"
          className="hidden md:block -bottom-40 -right-16"
          imgClass="w-[619px] h-auto"
        />
      </div>
    </section>
  );
};
