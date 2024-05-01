import { Navbar } from "@/components/common";
import { FC } from "react";

const AuthLayout: FC<Readonly<IChildren>> = ({ children }) => (
  <main>
    <Navbar isAuth />
    {children}
  </main>
);

export default AuthLayout;
