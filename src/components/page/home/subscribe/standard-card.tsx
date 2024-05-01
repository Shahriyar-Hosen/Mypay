import { GradientShadow } from "@/components/common";
import Image from "next/image";
import { CardButton } from "./card-button";
import { CardContainer } from "./card-container";
import { CardListItem } from "./card-list-item";
import { UnorderedListItems } from "./unordered-list-items";

const businessAccepted = [
  { label: "Transactions e-commerce" },
  { label: "Services basés sur l'abonnement" },
  { label: "Dons en ligne pour des associations à but non lucratif" },
  { label: "Paiements de réservations et de réservations" },
  { label: "Vente de produits numériques" },
];

export const StandardCard = () => {
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
