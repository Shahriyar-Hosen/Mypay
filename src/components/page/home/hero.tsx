import { AbsoluteImg, Button } from "@/components/common";
import Image from "next/image";

export const Hero = () => {
  const HeroLeftBox = () => (
    <div className="space-y-5 md:pt-20 min-w-fit">
      <h1 className="text-center md:text-start text-2xl lg:text-4xl xl:text-5xl font-bold md:leading-[40.5px] lg:leading-[60.5px] xl:leading-[70.5px] md:max-w-[361px] lg:max-w-[541px] xl:max-w-[721px]">
        <span className="bg-gradient-to-r from-[#4B86FC] to-[#75F2F6] bg-clip-text text-transparent">
          MyPay&nbsp;
        </span>
        Plateforme de gestion{" "}
        <span className="font-medium">
          de paiements en ligne pour business High-Risk.
        </span>
      </h1>

      <p className="text-sm font-medium text-[#E1E1E1] leading-5 lg:leading-6 text-justify md:text-start pb-1.5 md:pb-5 md:max-w-[350px] lg:max-w-[500px] xl:max-w-[557px]">
        Business High-Risk pris en charge : Servitia Financia et Investitiones ,
        Mercator es titulorum Pecuniae mutuatae ad diem Mercatores cryptae
        valutarum. Servitia Financia et Investitiones , Mercator es titulorum
        Pecuniae mutuatae ad diem Mercatores cryptae valutarum.
      </p>

      <Button className="lg:p-3.5" href="#subscribe">
        commencer
      </Button>
    </div>
  );
  const HeroRightBox = () => (
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
        className="hidden md:block -bottom-32 -right-6 lg:-bottom-40 lg:-right-7"
        imgClass="w-[619px] h-auto"
      />
    </div>
  );

  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 relative pb-10 md:pb-40">
      <HeroLeftBox />
      <HeroRightBox />
    </section>
  );
};
