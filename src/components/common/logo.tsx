import Image from "next/image";
import Link from "next/link";
import { FC, memo } from "react";

export const Logo: FC = memo(() => (
  <Link href="/" className="flex justify-center items-center">
    <Image
      src="/logo/logo.png"
      alt=""
      width={53}
      height={53}
      className="w-10 lg:w-[53px] h-auto"
    />
  </Link>
));

Logo.displayName = "Logo";
