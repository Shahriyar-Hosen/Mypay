import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

/**
 * A component that displays an image positioned absolutely with optional class
 * names for custom styling. The image has a fixed width and height of 200.
 *
 * @param {IAbsoluteImg} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered AbsoluteImg component.
 */
export const AbsoluteImg: FC<IAbsoluteImg> = ({
  img,
  alt,
  imgClass,
  className,
}) => (
  <section className={cn("absolute w-full z-0", className)}>
    <Image
      src={img}
      width={200}
      height={200}
      className={cn("inset-0", imgClass)}
      alt={alt || "absolute img"}
    />
  </section>
);
