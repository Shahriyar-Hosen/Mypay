import { AbsoluteImg, GradientShadow, SectionTitle } from "@/components/common";
import { InformationForm } from "./Information-form";

export const Information = () => {
  return (
    <section className="py-10 space-y-10 lg:space-y-20 relative">
      <AbsoluteImg
        img="/planet.png"
        imgClass="w-[352px] h-[341px]"
        className="hidden xl:block top-[15%] -left-[8.4%]"
      />
      <GradientShadow className="-top-[15%] -left-[8.4%]" />
      <GradientShadow className="bottom-[15%] -right-[30%]" />

      <SectionTitle>Demande d’information</SectionTitle>
      <InformationForm />
    </section>
  );
};
