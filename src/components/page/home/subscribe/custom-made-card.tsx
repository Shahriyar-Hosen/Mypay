import { BackgroundImg, GradientShadow } from "@/components/common";
import { CardButton } from "./card-button";
import { CardContainer } from "./card-container";
import { CardListItem } from "./card-list-item";
import { UnorderedListItems } from "./unordered-list-items";

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

export const CustomMadeCard = () => {
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
