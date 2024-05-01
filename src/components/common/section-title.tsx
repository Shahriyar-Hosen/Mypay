import { cn } from "@/lib/utils";
import { FC } from "react";

export const SectionTitle: FC<IClassName & IChildren> = ({
  children,
  className,
}) => (
  <h1
    className={cn(
      "text-2xl md:text-3xl lg:text-[47px] md:leading-[50px] lg:leading-[70.5px] text-center text-[#f7f7f7]",
      className
    )}
  >
    {children}
  </h1>
);
