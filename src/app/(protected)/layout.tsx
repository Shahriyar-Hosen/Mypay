import { Navbar } from "@/components/common";
import { FC } from "react";

const RootLayout: FC<Readonly<IChildren>> = ({ children }) => (
  <main>
    <Navbar />
    {children}
  </main>
);

export default RootLayout;
