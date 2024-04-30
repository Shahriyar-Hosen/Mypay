import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

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
