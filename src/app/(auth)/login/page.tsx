import { AuthCard, LoginForm } from "@/components/page/auth";
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
    <main className="min-h-screen py-5 lg:py-10 relative">
      <section className="relative w-fit md:h-full lg:w-full max-w-[1199px] mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[30px] bg-[#f3f3f3] p-4 sm:p-6 lg:p-3 lg:px-[14px] flex flex-col md:flex-row justify-center lg:justify-start items-center gap-5 lg:gap-12 xl:gap-[95px]">
        <AuthCard />
        <div className="text-[#2a3547] w-full max-w-[460px] space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="text-[#2a3547]">
            <h1 className="text-xl sm:text-[30px] leading-[36px] tracking-[-1%] font-semibold font-sans">
              Bienvenue sur MyPay
            </h1>
            <p className="pt-0.5 sm:pt-3 text-sm sm:text-base tracking-[-2%]">
              Votre admin panel
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 lg:gap-4 flex-wrap">
            <SocialButton img="/google.png">
              Connection&nbsp;Google
            </SocialButton>
            <SocialButton img="/fb-color.png">
              Connection&nbsp;Facebook
            </SocialButton>
          </div>
          <div className="flex justify-center items-center gap-3">
            <hr className="h-[1px] w-full bg-[#eaeff4]" />
            <span className="text-xs sm:text-sm leading-[19.6px] tracking-[-2%] text-[#5a6a85]">
              ou
            </span>
            <hr className="h-[1px] w-full bg-[#eaeff4]" />
          </div>
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
        </div>
      </section>
    </main>
  );
};

export default Login;