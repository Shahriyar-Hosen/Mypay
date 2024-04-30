import {
  AbsoluteImg,
  BackgroundImg,
  GradientShadow,
  SectionTitle,
} from "@/components/common";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

const CardButton: FC<IChildren> = ({ children }) => (
  <button className="bg-gradient-lite text-sm md:text-lg font-semibold text-black px-5 md:px-9 py-1.5 rounded-full">
    {children}
  </button>
);
const CardContainer: FC<IChildren> = ({ children }) => (
  <div className="p-3.5 md:p-6 flex flex-col justify-start items-center gap-5 sm:gap-8 md:gap-10 lg:gap-12">
    {children}
  </div>
);
const CardListItem: FC<{ label: string }> = ({ label }) => (
  <li className="flex justify-start md:items-center items-center gap-1 md:gap-2.5 w-full">
    <Image
      src="/check-circle.png"
      width={32}
      height={32}
      className="w-full max-w-[20px] md:max-w-[32px] h-auto max-h-[20px] md:max-h-[32px]"
      alt=""
    />
    <span className="text-sm sm:text-base lg:text-[19px] font-medium leading-5 lg:leading-[28.5px] text-[#f7f7f7]">
      {label}
    </span>
  </li>
);

const UnorderedListItems: FC<IChildren & IClassName> = ({
  children,
  className,
}) => (
  <ul
    className={cn(
      "flex flex-col items-start gap-3.5 md:gap-5 w-full",
      className
    )}
  >
    {children}
  </ul>
);

const StandardCard = () => {
  const businessAccepted = [
    { label: "Transactions e-commerce" },
    { label: "Services basés sur l'abonnement" },
    { label: "Dons en ligne pour des associations à but non lucratif" },
    { label: "Paiements de réservations et de réservations" },
    { label: "Vente de produits numériques" },
  ];
  return (
    <div className="w-full max-w-[800px] bg-gradient-lite p-[2px] rounded-[10px] relative z-20">
      <div className="w-full h-full bg-slate-800 rounded-[10px]">
        <div className="w-full h-full bg-[#F1F1FF]/20 rounded-[10px] relative">
          <GradientShadow className="-top-10 left-40 hidden sm:block" />

          <CardContainer>
            <CardButton>STANDARD</CardButton>

            <div className="flex gap-3 lg:gap-5">
              <Image src="/logo/cd-logo.svg" width={62} height={44} alt="" />
              <Image
                src="/logo/MasterCard-Logo.svg"
                width={73}
                height={55}
                alt=""
              />
              <Image src="/logo/visa-logo.svg" width={74} height={28} alt="" />
            </div>

            <h3 className="font-semibold text-[40px] md:text-[50px] lg:text-[70px] md:leading-[80px] lg:leading-[105px] bg-gradient-text-lite">
              5% + 0.25 €
            </h3>

            <div className="space-y-5 md:space-y-7 w-full md:px-10">
              <h6 className="text-base lg:text-[19px] font-bold leading-[28.5px] text-[#E5E5E5]">
                Business Acceptés :
              </h6>

              <UnorderedListItems>
                {businessAccepted.map((item, i) => (
                  <CardListItem key={i} {...item} />
                ))}
              </UnorderedListItems>
            </div>
          </CardContainer>
          <button className="bg-[#07111E] w-full rounded-lg text-center font-medium text-[28px] leading-[42px] py-2.5 md:py-5 mt-4">
            Démarrer
          </button>
        </div>
      </div>
    </div>
  );
};

const CustomMadeCard = () => {
  const customCardItem = [
    { label: "Transactions Sécurisées" },
    { label: "Support Multi-Devises" },
    { label: "Protection contre la Fraude" },
    { label: "Paiement Personnalisable" },
    { label: "Interface Adaptée aux Mobiles" },
    { label: "Transactions Sécurisées" },
    { label: "Support Multi-Devises" },
    { label: "Protection contre la Fraude" },
    { label: "Paiement Personnalisable" },
    { label: "Interface Adaptée aux Mobiles" },
  ];
  return (
    <div className="relative w-full max-w-[560px] z-10">
      <GradientShadow className="bottom-0 right-40 hidden sm:block" />
      <BackgroundImg
        img="/card-bg.png"
        className="rounded-xl overflow-hidden xl:-mt-2.5 xl:-ml-3.5 pb-10 relative shadow-2xl shadow-cyan-700/5"
      >
        <CardContainer>
          <CardButton>CUSTOM MADE</CardButton>
          <h1 className="bg-gradient-text-lite font-bold text-base md:text-[19px] leading-[28.5px]">
            Dix fonctionnalités essentielles
          </h1>
          <UnorderedListItems className="md:px-10">
            {customCardItem.map((item, i) => (
              <CardListItem key={i} {...item} />
            ))}
          </UnorderedListItems>
        </CardContainer>
      </BackgroundImg>
    </div>
  );
};

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
