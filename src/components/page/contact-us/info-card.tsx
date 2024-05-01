import { BackgroundImg } from "@/components/common";
import Image from "next/image";
import { FC } from "react";

type IInfoBox = IChildren & { size?: number; icon: string };
const InfoBox: FC<IInfoBox> = ({ children, size, icon }) => (
  <div className="flex justify-start items-center gap-2.5">
    <Image src={icon} width={size || 31} height={size || 31} alt="" />
    {children}
  </div>
);

const InfoText: FC<IChildren> = ({ children }) => (
  <p className="text-base leading-[24px] text-[#f7f7f7]">{children}</p>
);

export const InfoCard = () => {
  return (
    <BackgroundImg
      img="/contact-us-bg.png"
      className="w-full md:max-w-[385px] rounded-[30px] border border-black overflow-hidden p-5 md:p-10 md:pb-11"
    >
      <h2 className="text-[23px] font-semibold leading-[34.5px] text-[#f7f7f7] pt-4">
        Informations
      </h2>
      <p className="text-xs leading-[18px] text-[#bcbcbc] pt-2">
        Veuillez trouver ci-dessous nos informations de contact
      </p>

      <div className="py-7 md:py-12 space-y-7 md:space-y-14">
        <InfoBox icon="/phone.png">
          <div className="space-y-2.5">
            <InfoText>+33 017 797 176</InfoText>
            <InfoText>+33 017 797 176</InfoText>
          </div>
        </InfoBox>
        <InfoBox icon="/mail.png" size={36}>
          <InfoText>Support@mypay.com</InfoText>
        </InfoBox>
        <InfoBox icon="/map.png">
          <InfoText>Paris, France</InfoText>
        </InfoBox>
      </div>
    </BackgroundImg>
  );
};
