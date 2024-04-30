import { BackgroundImg, GradientShadow } from "@/components/common";
import Image from "next/image";
import { FC } from "react";
const CardButton: FC<IChildren> = ({ children }) => (
  <button className="bg-gradient-lite text-lg font-semibold text-black px-9 py-2.5 rounded-full">
    {children}
  </button>
);
const CardContainer: FC<IChildren> = ({ children }) => (
  <div className="p-6 flex flex-col justify-start items-center gap-12">
    {children}{" "}
  </div>
);
const CardListItem: FC<{ label: string }> = ({ label }) => (
  <li className="flex justify-center items-center gap-2.5">
    <Image src="/check-circle.png" width={32} height={32} alt="" />
    <span>{label}</span>
  </li>
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
    <div className="w-full max-w-[800px] h-[800px] bg-gradient-lite p-[2px] rounded-[10px] relative z-50">
      <div className="w-full h-full bg-slate-800 rounded-[10px]">
        <div className="w-full h-full bg-[#F1F1FF]/20 rounded-[10px] relative">
          <GradientShadow className="-top-10 left-40" />

          <CardContainer>
            <CardButton>STANDARD</CardButton>

            <div className="flex gap-5">
              <Image src="/logo/cd-logo.svg" width={62} height={44} alt="" />
              <Image
                src="/logo/MasterCard-Logo.svg"
                width={73}
                height={55}
                alt=""
              />
              <Image src="/logo/visa-logo.svg" width={74} height={28} alt="" />
            </div>

            <h3 className="font-semibold text-[70px] leading-[105px] bg-gradient-text-lite">
              5% + 0.25 €
            </h3>

            <div className="space-y-7 w-full px-10">
              <h6 className="text-[19px] font-bold leading-[28.5px] text-[#E5E5E5]">
                Business Acceptés :
              </h6>

              <ul className="flex flex-col items-start gap-5">
                {businessAccepted.map((item, i) => (
                  <CardListItem key={i} {...item} />
                ))}
              </ul>
            </div>
          </CardContainer>
          <button className="bg-[#07111E] w-full rounded-lg text-center font-medium text-[28px] leading-[42px] py-5 mt-4">
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
    <BackgroundImg
      img="/card-bg.png"
      className="w-[560px] h-[756px] rounded-xl overflow-hidden -mt-2.5 -ml-3.5"
    >
      <CardContainer>
        <CardButton>CUSTOM MADE</CardButton>
        <h1 className="bg-gradient-text-lite font-bold text-[19px] leading-[28.5px]">
          Dix fonctionnalités essentielles
        </h1>

        <ul className="flex flex-col items-start gap-5 w-full px-10">
          {customCardItem.map((item, i) => (
            <CardListItem key={i} {...item} />
          ))}
        </ul>
      </CardContainer>
    </BackgroundImg>
  );
};

export const Subscribe = () => {
  return (
    <section className="py-20">
      <div className="text-center font-medium py-5 space-y-5">
        <h1 className="text-xl md:text-3xl xl:text-5xl">
          Choisissez votre pack & Abonnez-vous
        </h1>
        <p className="text-xs md:text-base lg:text-lg text-[#E1E1E1]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      <div className="flex flex-col xl:flex-row justify-center items-start pt-10">
        <StandardCard />
        <CustomMadeCard />
      </div>
    </section>
  );
};
