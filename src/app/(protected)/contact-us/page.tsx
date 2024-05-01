import { BackButton, BackgroundImg, SectionTitle } from "@/components/common";
import Image from "next/image";
import { FC } from "react";

const ContactUs = () => {
  const InfoBox: FC<IChildren & { size?: number; icon: string }> = ({
    children,
    size,
    icon,
  }) => (
    <div className="flex justify-start items-center gap-2.5">
      <Image src={icon} width={size || 31} height={size || 31} alt="" />
      {children}
    </div>
  );
  const InfoText: FC<IChildren> = ({ children }) => (
    <p className="text-base leading-[24px] text-[#f7f7f7]">{children}</p>
  );

  return (
    <main className="min-h-screen lg:py-10 relative">
      <SectionTitle>Contactez-nous</SectionTitle>
      <section className="relative w-full max-w-[1130px] mx-auto rounded-[30px] bg-[#f3f3f3] my-10 p-2">
        <BackButton className="absolute -top-24 left-10" />
        <BackgroundImg
          img="/contact-us-bg.png"
          className="w-full max-w-[385px] rounded-[30px] border border-black overflow-hidden p-5 lg:p-10 lg:pb-11"
        >
          <h2 className="text-[23px] font-semibold leading-[34.5px] text-[#f7f7f7] pt-4">
            Informations
          </h2>
          <p className="text-xs leading-[18px] text-[#bcbcbc] pt-2">
            Veuillez trouver ci-dessous nos informations de contact
          </p>

          <div className="py-7 lg:py-12 space-y-7 lg:space-y-14">
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
      </section>
    </main>
  );
};

export default ContactUs;
