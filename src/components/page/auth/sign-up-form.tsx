"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { AuthInput } from "./auth-input";

export type ISignUpValues = typeof initialValues;
const initialValues = {
  username: "",
  email: "",
  password: "",
};

export const SignUpForm = () => {
  const handleSubmit = (
    values: ISignUpValues,
    { setSubmitting }: FormikHelpers<ISignUpValues>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="space-y-5 mx-auto">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <AuthInput name="username" label="Nom d’utilisateur" />
          <AuthInput name="email" type="email" label="Email" />
          <AuthInput label="Mot de passe" type="password" name="password" />

          <button
            type="submit"
            className="w-full rounded-lg py-3 bg-[#5d87ff] text-center font-semibold text-base text-white"
          >
            Créer un compte
          </button>
        </div>
      </Form>
    </Formik>
  );
};
