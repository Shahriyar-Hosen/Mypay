import { cn } from "@/lib/utils";
import { Field } from "formik";
import { FC } from "react";
import { ILoginValues, ISignUpValues } from ".";

export interface IAuthInput extends IClassName {
  label: string;
  placeholder?: string;
  name: keyof ILoginValues | keyof ISignUpValues;
  type?: HTMLInputType;
  isTextArea?: boolean;
}

export const AuthInput: FC<IAuthInput> = ({
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
