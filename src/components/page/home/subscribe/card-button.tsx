import { FC } from "react";

export const CardButton: FC<IChildren> = ({ children }) => (
  <button className="bg-gradient-lite text-sm md:text-lg font-semibold text-black px-5 md:px-9 py-1.5 rounded-full hover:text-zinc-950 hover:shadow-lg hover:shadow-cyan-500/50 transition-all delay-150">
    {children}
  </button>
);
