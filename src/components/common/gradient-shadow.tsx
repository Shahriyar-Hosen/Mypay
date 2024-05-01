import { cn } from "@/lib/utils";
import { FC } from "react";

/**
 * A decorative component that creates a gradient shadow effect. The shadow has a
 * specific rotation and blur, and it can be customized with additional class names.
 *
 * @param {IClassName} props - The props for the `GradientShadow` component.
 * @param {string} [props.className] - Additional class names to customize the styling (optional).
 * @returns {JSX.Element} - The rendered `GradientShadow` component.
 */
export const GradientShadow: FC<IClassName> = ({ className }) => (
  <div
    className={cn(
      "absolute w-[356px] h-[444px] rotate-[47.46deg] rounded-[200px] bg-gradient-to-l from-[#26D0CE] to-[#1A2980] filter blur-[400px]",
      className
    )}
  />
);
