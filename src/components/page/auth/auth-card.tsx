import { BackgroundImg } from "@/components/common";
import Image from "next/image";
import { FC } from "react";

export const AuthCard = () => {
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

  return (
    <BackgroundImg
      img="/contact-us-bg.png"
      className="w-full md:max-w-[489px] rounded-[30px] border border-black overflow-hidden p-5 md:px-[60px] md:py-36 hidden lg:block"
    >
      <Image src="/auth-side-img.png" width={366} height={380} alt="" />
    </BackgroundImg>
  );
};
