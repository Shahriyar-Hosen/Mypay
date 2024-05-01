"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";

/**
 * A button that navigates back to the previous page when clicked.
 * It can be customized with additional CSS class names.
 *
 * @param {IClassName} props - The props for the BackButton component.
 * @param {string} [props.className] - Additional CSS class names to style the button (optional).
 * @description This button is used to go to previous page.
 * @returns {JSX.Element} - The rendered BackButton component.
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
