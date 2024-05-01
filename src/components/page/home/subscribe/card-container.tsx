import { FC } from "react";

export const CardContainer: FC<IChildren> = ({ children }) => (
  <div className="p-3.5 md:p-6 flex flex-col justify-start items-center gap-5 sm:gap-8 md:gap-10 lg:gap-12 relative z-30">
    {children}
  </div>
);
