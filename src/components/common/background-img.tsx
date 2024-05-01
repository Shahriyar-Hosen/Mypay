import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, PropsWithChildren, memo } from "react";

/**
 * Interface for the `BackgroundImg` component's props.
 *
 * @property {string} img - The URL of the background image.
 * @property {boolean} [overflow] - If `true`, enables overflow handling.
 * @property {string} [className] - Additional class names for custom styling.
 */
export interface IBackgroundImage extends PropsWithChildren, IClassName {
  img: string;
  overflow?: boolean;
}

/**
 * A component that displays a background image with optional overflow handling.
 * Any child elements are displayed on top of the background image.
 *
 * @param {IBackgroundImage} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered BackgroundImg component.
 */
export const BackgroundImg: FC<IBackgroundImage> = memo(
  ({ children, img, className, overflow }) => (
    <section
      className={cn(
        "relative w-full",
        overflow && "overflow-hidden",
        className
      )}
    >
      <div className="absolute w-full inset-0">
        <Image
          src={img}
          className={cn(
            "w-full object-cover",
            overflow && "min-w-[500px] min-h-[500px]"
          )}
          alt="background image"
          fill
        />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  )
);
BackgroundImg.displayName = "BackgroundImg";
