import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes, FC } from "react";

/**
 * Extended props for the `Button` component.
 *
 * @typedef {IClassName & ButtonHTMLAttributes<HTMLButtonElement>} ExtraTypes
 */
type ExtraTypes = IClassName & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Props for the `Button` component.
 *
 * @property {string} [imgSize] - Custom size for the arrow image (optional).
 * @property {string} [href] - URL to link to when the button is clicked (optional).
 * @property {string} [className] - Additional CSS classes for styling (optional).
 * @property {ButtonHTMLAttributes<HTMLButtonElement>} [extraProps] - Additional button attributes (optional).
 */
interface IButton extends ExtraTypes {
  imgSize?: string;
  href?: string;
}

/**
 * A customizable button component with an optional arrow image and link functionality.
 * When `href` is provided, the button acts as a link. Otherwise, it behaves like a standard button.
 *
 * @param {IButton} props - The props for the Button component.
 * @returns {JSX.Element} - The rendered Button component.
 */
export const Button: FC<IButton> = ({ children, className, imgSize, href }) => {
  const button = (
    <button className="w-auto h-fit bg-gradient-to-r from-[#4B86FC] to-[#75F2F6] p-[2px] rounded-full">
      <div
        className={cn(
          "h-full w-full p-1.5 lg:p-2.5 flex items-center justify-center gap-2.5 bg-[#00020D] hover:bg-slate-950/95 rounded-full transition-all delay-150",
          className
        )}
      >
        <span className="font-medium text-base lg:text-xl uppercase bg-gradient-to-r from-[#4B86FC] to-[#75F2F6] bg-clip-text text-transparent pl-2.5">
          {children}
        </span>
        <Image
          src="/button-arrow-color-icon.png"
          width={37}
          height={37}
          className={cn("w-[25px] h-auto lg:w-[37px]", imgSize)}
          alt=""
        />
      </div>
    </button>
  );

  return href ? (
    <Link href={href} className="block">
      {button}
    </Link>
  ) : (
    button
  );
};

Button.displayName = "Button";
