import { AuthWrapper, LoginForm } from "@/components/page/auth";
import Link from "next/link";

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
