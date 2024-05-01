import { AuthWrapper, SignUpForm } from "@/components/page/auth";

const SignUp = () => {
  return (
    <main className="min-h-screen py-5 lg:py-10">
      <AuthWrapper>
        <SignUpForm />
      </AuthWrapper>
    </main>
  );
};

export default SignUp;
