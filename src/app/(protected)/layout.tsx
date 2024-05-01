import { Navbar } from "@/components/common";
import { Footer } from "@/components/footer";
import { FC } from "react";

const ProtectedLayout: FC<Readonly<IChildren>> = ({ children }) => (
  <main>
    <Navbar />
    {children}
    <Footer />
  </main>
);

export default ProtectedLayout;
