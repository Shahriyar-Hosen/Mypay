import { Navbar } from "@/components/common";
import { FC } from "react";

const ProtectedLayout: FC<Readonly<IChildren>> = ({ children }) => (
  <main>
    <Navbar />
    {children}
  </main>
);

export default ProtectedLayout;
