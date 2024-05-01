import { Navbar } from "@/components/common";
import { Footer } from "@/components/footer";
import { FC } from "react";

const AuthLayout: FC<Readonly<IChildren>> = ({ children }) => (
  <main>
    <Navbar isAuth />
    {children}
    <Footer />
  </main>
);

export default AuthLayout;
