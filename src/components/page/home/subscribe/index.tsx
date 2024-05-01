import { AbsoluteImg, SectionTitle } from "@/components/common";
import { CustomMadeCard } from "./custom-made-card";
import { StandardCard } from "./standard-card";

export const Subscribe = () => {
  return (
    <section className="space-y-5" id="subscribe">
      <div className="text-center font-medium space-y-5">
        <SectionTitle className="pt-5">
          Choisissez votre pack & Abonnez-vous
        </SectionTitle>
        <p className="text-xs md:text-base lg:text-lg text-[#E1E1E1]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-5 sm:gap-10 xl:gap-0 pt-5 lg:pt-10 relative">
        <StandardCard />
        <CustomMadeCard />

        <AbsoluteImg
          img="/bg-line.png"
          imgClass="w-[170px] h-[170px]"
          className="hidden xl:block top-[45%] left-[90%]"
        />
      </div>
    </section>
  );
};
