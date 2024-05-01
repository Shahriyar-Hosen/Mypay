import Image from "next/image";
import Link from "next/link";
import { FC, memo } from "react";

/**
 * A logo component that serves as a link to the homepage.
 * It uses the `Image` component from Next.js for optimized image handling,
 * with a default logo source and specified dimensions.
 *
 * @returns {JSX.Element} - The rendered `Logo` component.
 */
export const Logo: FC = memo(() => (
  <Link href="/">
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
