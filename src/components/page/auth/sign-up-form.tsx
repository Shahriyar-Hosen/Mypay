"use client";

import { cn } from "@/lib/utils";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";

type IValues = typeof initialValues;
const initialValues = {
  username: "",
  email: "",
  password: "",
};

interface IAuthInput extends IClassName {
  label: string;
  placeholder?: string;
  name: keyof typeof initialValues;
  type?: HTMLInputType;
  isTextArea?: boolean;
}
const AuthInput: FC<IAuthInput> = ({
  type,
  label,
  name,
  className,
  isTextArea,
  placeholder,
}) => (
  <div className={cn("flex flex-col w-full cursor-pointer gap-2", className)}>
    <label
      htmlFor={name}
      className="font-semibold text-sm leading-[19.6px] tracking-[-1%] text-[#2a3547] font-sans"
    >
      {label}
    </label>
    <Field
      id={name}
      name={name}
      type={type || "text"}
      as={isTextArea ? "textarea" : "input"}
      placeholder={placeholder}
      className={cn(
        "bg-transparent focus:outline-none rounded-lg border border-[#eaeff4] shadow px-2.5 py-[11px] text-base",
        isTextArea && "px-0"
      )}
    />
  </div>
);

export const SignUpForm = () => {
  const handleSubmit = (
    values: IValues,
    { setSubmitting }: FormikHelpers<IValues>
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
