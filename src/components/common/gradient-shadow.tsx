import { cn } from "@/lib/utils";
import { FC } from "react";

export const GradientShadow: FC<IClassName> = ({ className }) => (
  <div
    className={cn(
      "absolute w-[356px] h-[444px] rotate-[47.46deg] rounded-[200px] bg-gradient-to-l from-[#26D0CE] to-[#1A2980] filter blur-[400px]",
      className
    )}
  />
);
