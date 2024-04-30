import { Logo } from "@/components/common";
import Image from "next/image";

export const Review = () => {
  return (
    <section
      className="w-full max-w-[1112px] mx-auto rounded-[20px] p-5 flex flex-col justify-start items-center
      
     bg-[linear-gradient(144.39deg,#ffffff66_-278.56%,#6d6d6d66_-78.47%,#11101d66_91.61%)]"
    >
      <Logo />
      <div className="w-fit space-y-5 pt-2.5">
        <div className="flex justify-between items-center">
          <Image
            src="/“-1.png"
            alt=""
            width={42}
            height={27}
            className="w-[30px] md:w-[42px] h-auto"
          />
          <Image
            src="/“-2.png"
            alt=""
            width={42}
            height={27}
            className="w-[30px] md:w-[42px] h-auto"
          />
        </div>
        <p className="w-full lg:max-w-[900px] text-center font-medium text-base sm:text-lg md:text-xl leading-[28px] md:leading-[37px] tracking-[2%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="flex justify-center items-center gap-5 pt-10 md:pt-12 pb-5">
        <Image src="/avatar.png" width={58} height={48} alt="" />
        <div>
          <h4 className="text-xl leading-[32px]">Herman Jensen</h4>
          <p className="text-base opacity-50">CEO MyPay</p>
        </div>
      </div>
    </section>
  );
};
