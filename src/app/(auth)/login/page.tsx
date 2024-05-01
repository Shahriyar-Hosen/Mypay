import { AuthWrapper, LoginForm } from "@/components/page/auth";
import Image from "next/image";
import Link from "next/link";

import { FC } from "react";

export const SocialButton: FC<{ img: string } & IChildren> = ({
  children,
  img,
}) => {
  return (
    <button className="text-sm leading-[19.6px] tracking-[-1%] flex justify-center items-center gap-0.5 border border-[#eaeff4] rounded-lg py-3 px-5 w-full sm:w-[47%] shadow-sm">
      <Image src={img} width={24} height={24} alt="" />
      {children}
    </button>
  );
};

const Login = () => {
  return (
    <main className="min-h-screen py-5 lg:py-10">
      <AuthWrapper>
        <LoginForm />
        <p className="text-xs sm:text-sm tracking-[-2%] text-[#2a3547]">
          Nouveau sur MyPay?&nbsp;
          <Link
            href="/sign-up"
            className="font-semibold tracking-[-1%] text-[#5d87ff] font-sans"
          >
            Créer un compte
          </Link>
        </p>
      </AuthWrapper>
    </main>
  );
};

export default Login;
