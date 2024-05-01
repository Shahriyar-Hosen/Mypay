"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";

/**
 * @param className The class can be given the className to design it.
 * @description This button is used to go to previous page.
 */

export const BackButton: FC<IClassName> = memo(({ className }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className={cn("cursor-pointer font-extrabold", className)}
    >
      <Image
        src="/back-arrow.png"
        width={54}
        height={54}
        className="w-[25px] md:w-[40px] lg:w-[54px] h-auto"
        alt="back button"
      />
    </div>
  );
});
BackButton.displayName = "BackButton";
