"use client";

import { AbsoluteImg, GradientShadow, SectionTitle } from "@/components/common";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";
import { Button } from "./hero";

type IValues = typeof initialValues;
const initialValues = {
  nom: "",
  prenom: "",
  email: "",
  CompanyName: "",
  businessType: "",
  Siret: "",
  Turnover: "",
  Country: "",
  Phone: "",
};

interface IInformationInput {
  label: string;
  placeholder: string;
  name: keyof typeof initialValues;
  type?: HTMLInputType;
}
const InformationInput: FC<IInformationInput> = ({
  type,
  label,
  name,
  placeholder,
}) => (
  <div className="flex flex-col w-full max-w-[364px] space-y-3 cursor-pointer">
    <label
      htmlFor={name}
      className="font-bold text-lg leading-[26px] tracking-[0.9px] uppercase"
    >
      {label}
    </label>
    <div
      className="py-[20.5px] px-[25px] rounded-xl
bg-[linear-gradient(144.39deg,#ffffff66_-278.56%,#6d6d6d66_-78.47%,#11101d66_91.61%)]"
    >
      <Field
        id={name}
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        className="bg-transparent focus:outline-none text-lg placeholder:leading-[27px]"
      />
    </div>
  </div>
);

export const Information = () => {
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
    <section className="py-10 space-y-10 lg:space-y-20 relative">
      <AbsoluteImg
        img="/planet.png"
        imgClass="w-[352px] h-[341px]"
        className="hidden xl:block top-[15%] -left-[8.4%]"
      />
      <GradientShadow className="-top-[15%] -left-[8.4%]" />
      <GradientShadow className="bottom-[15%] -right-[30%]" />

      <SectionTitle>Demande d’information</SectionTitle>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="space-y-5 max-w-[800px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center place-items-center">
            <InformationInput label="Nom" name="nom" placeholder="Votre nom" />
            <InformationInput
              label="Prenom"
              name="nom"
              placeholder="Votre prénom"
            />
            <InformationInput
              name="email"
              type="email"
              label="Email"
              placeholder="email@example.com"
            />
            <InformationInput
              name="CompanyName"
              label="Nom de l’entreprise"
              placeholder="Le nom de votre entreprise"
            />
            <InformationInput
              name="businessType"
              label="Type de votre business"
              placeholder="Type"
            />
            <InformationInput
              name="Siret"
              label="Siret"
              placeholder="45637XXXXXXX"
            />
            <InformationInput
              name="Turnover"
              label="Chiffre d’affaire"
              placeholder="1.0000.000"
            />
            <InformationInput
              name="Country"
              label="Pays"
              placeholder="France"
            />
            <InformationInput
              name="Phone"
              label="Numéro de téléphone"
              placeholder="(+33) 675 763 445"
            />

            <div className="flex justify-start items-end sm:w-full">
              <Button
                className="gap-12 lg:p-[9px]"
                imgSize="sm:w-[40px] lg:w-[49.5px]"
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </section>
  );
};
