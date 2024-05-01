import { cn } from "@/lib/utils";
import { FC } from "react";

type IUlItems = IChildren & IClassName;
export const UnorderedListItems: FC<IUlItems> = ({ children, className }) => (
  <ul
    className={cn(
      "flex flex-col items-start gap-3.5 md:gap-5 w-full",
      className
    )}
  >
    {children}
  </ul>
);
