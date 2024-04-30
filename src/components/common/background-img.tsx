import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { FC, PropsWithChildren, memo } from "react";

/**
 * @param img StaticImageData
 * @param children
 * @param className (optional)
 * @param mobImg  StaticImageData (optional)
 * @param overflow boolean (optional)
 * @description Any image to use as background image, here only image should be given. To fix the position class must be given in className.
 * @returns JSX
 */

export interface IBackgroundImage extends PropsWithChildren, IClassName {
  img: string;
  mobImg?: string;
  overflow?: boolean;
}

export const BackgroundImg: FC<IBackgroundImage> = memo(
  ({ children, img, mobImg, className, overflow }) => (
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
        {mobImg && (
          <Image
            src={mobImg}
            className="w-full block md:hidden"
            alt="background image"
            fill
          />
        )}
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  )
);
BackgroundImg.displayName = "BackgroundImg";
