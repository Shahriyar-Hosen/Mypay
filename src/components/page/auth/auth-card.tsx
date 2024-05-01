import { BackgroundImg } from "@/components/common";
import Image from "next/image";

export const AuthCard = () => (
  <BackgroundImg
    img="/contact-us-bg.png"
    className="w-full md:max-w-[489px] rounded-[30px] border border-black overflow-hidden p-5 md:px-[60px] md:py-36 hidden lg:block"
  >
    <Image src="/auth-side-img.png" width={366} height={380} alt="" />
  </BackgroundImg>
);
