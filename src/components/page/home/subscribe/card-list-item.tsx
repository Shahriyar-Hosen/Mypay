import Image from "next/image";
import { FC } from "react";

export const CardListItem: FC<{ label: string }> = ({ label }) => (
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
