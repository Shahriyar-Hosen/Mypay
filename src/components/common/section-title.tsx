import { cn } from "@/lib/utils";
import { FC } from "react";

/**
 * A section title component that displays its content in a large, centered style.
 * It supports additional CSS class names for customization.
 *
 * @param {IClassName & IChildren} props - The props for the `SectionTitle` component.
 * @param {string} [props.className] - Additional CSS class names for styling (optional).
 * @param {React.ReactNode} props.children - The content to be displayed within the section title.
 * @returns {JSX.Element} - The rendered `SectionTitle` component.
 */
export const SectionTitle: FC<IClassName & IChildren> = ({
  children,
  className,
}) => (
  <h1
    className={cn(
      "text-2xl md:text-3xl lg:text-[47px] md:leading-[50px] lg:leading-[70.5px] text-center text-[#f7f7f7]",
      className
    )}
  >
    {children}
  </h1>
);
