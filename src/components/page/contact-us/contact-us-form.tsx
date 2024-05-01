"use client";

import { cn } from "@/lib/utils";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";
import { Button } from "../home";

type IValues = typeof initialValues;
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

interface IInformationInput extends IClassName {
  label: string;
  placeholder: string;
  name: keyof typeof initialValues;
  type?: HTMLInputType;
  isTextArea?: boolean;
}
const InformationInput: FC<IInformationInput> = ({
  type,
  label,
  name,
  className,
  isTextArea,
  placeholder,
}) => (
  <div
    className={cn(
      "flex flex-col w-full lg:max-w-[246px] cursor-pointer",
      className
    )}
  >
    <label
      htmlFor={name}
      className="font-medium text-xs leading-[18px] text-[#b0b0b0]"
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
        "bg-transparent focus:outline-none text-xl font-medium placeholder:text-[#333]/80 text-[#333333] leading-[30px] px-1.5 py-2 border-b border-[#b0b0b0]",
        isTextArea && "px-0"
      )}
    />
  </div>
);

export const ContactUsForm = () => {
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
    <div className="w-full lg:w-auto">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="space-y-5 mx-auto p-5 lg:pb-8">
          <div className="grid grid-cols-1 gap-8 justify-items-center place-items-center">
            <InformationInput
              label="Votre nom"
              name="firstName"
              placeholder="John"
            />
            <InformationInput
              label="Votre nom"
              name="lastName"
              placeholder="Doe"
            />
            <InformationInput
              name="email"
              type="email"
              label="Email"
              placeholder="John@doe.com"
            />
            <InformationInput
              isTextArea
              name="message"
              label="Message"
              className="lg:max-w-full lg:col-span-2"
              placeholder="Ecrivez votre message"
            />

            <div className="flex justify-start items-end sm:w-full lg:mt-5">
              <Button
                className="md:gap-10 lg:gap-14 bg-white"
                imgSize="sm:w-[40px] lg:w-[45px]"
              >
                ENVOYER
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
