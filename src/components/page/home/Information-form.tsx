"use client";

import { Button } from "@/components/common";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";

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

interface IInfoInput {
  label: string;
  placeholder: string;
  name: keyof typeof initialValues;
  type?: HTMLInputType;
}
const InfoInput: FC<IInfoInput> = ({ type, label, name, placeholder }) => (
  <div className="flex flex-col w-full max-w-[364px] space-y-3 cursor-pointer">
    <label
      htmlFor={name}
      className="font-bold text-lg leading-[26px] tracking-[0.9px] uppercase"
    >
      {label}
    </label>
    <div className="py-[20.5px] px-[25px] rounded-xl bg-[linear-gradient(144.39deg,#ffffff66_-278.56%,#6d6d6d66_-78.47%,#11101d66_91.61%)]">
      <Field
        id={name}
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        className="bg-transparent focus:outline-none text-lg placeholder:leading-[27px] w-full"
      />
    </div>
  </div>
);

export const InformationForm = () => {
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
      <Form className="space-y-5 max-w-[800px] mx-auto relative z-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center sm:place-items-end">
          <InfoInput label="Nom" name="nom" placeholder="Votre nom" />
          <InfoInput label="Prenom" name="prenom" placeholder="Votre prénom" />
          <InfoInput
            name="email"
            type="email"
            label="Email"
            placeholder="email@example.com"
          />
          <InfoInput
            name="CompanyName"
            label="Nom de l’entreprise"
            placeholder="Le nom de votre entreprise"
          />
          <InfoInput
            name="businessType"
            label="Type de votre business"
            placeholder="Type"
          />
          <InfoInput name="Siret" label="Siret" placeholder="45637XXXXXXX" />
          <InfoInput
            name="Turnover"
            label="Chiffre d’affaire"
            placeholder="1.0000.000"
          />
          <InfoInput name="Country" label="Pays" placeholder="France" />
          <InfoInput
            name="Phone"
            label="Numéro de téléphone"
            placeholder="(+33) 675 763 445"
          />

          <div className="flex justify-start items-end sm:w-full px-5">
            <Button
              className="gap-12 sm:gap-[74px] lg:p-[9px]"
              imgSize="sm:w-[45px] lg:w-[49.5px]"
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
