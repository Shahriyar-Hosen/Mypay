"use client";

import { cn } from "@/lib/utils";
import { Field, Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { FC } from "react";

type IValues = typeof initialValues;
const initialValues = {
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

export const LoginForm = () => {
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
          <AuthInput name="email" type="email" label="Email" />
          <div className="space-y-2 sm:space-y-4">
            <AuthInput label="Mot de passe" type="password" name="password" />
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <label className="flex items-center cursor-pointer gap-2">
                <input type="checkbox" className="peer hidden" />

                <div className="w-5 h-5 peer-checked:hidden flex justify-center items-center">
                  <div className="w-3 h-3 bg-gray-200/50 border border-gray-400 rounded-sm" />
                </div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 hidden peer-checked:block"
                >
                  <path
                    d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z"
                    fill="#5D87FF"
                    stroke="#5D87FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="text-[#2a3547]">
                  Se rappeler de cet appareil
                </span>
              </label>
              <Link href="/forgot-password" className="text-[#5d87ff]">
                Mot de passe oublié ?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg py-3 bg-[#5d87ff] text-center font-semibold text-base text-white"
          >
            Se connecter
          </button>
        </div>
      </Form>
    </Formik>
  );
};
