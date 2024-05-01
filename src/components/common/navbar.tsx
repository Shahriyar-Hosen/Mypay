import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BackButton, Logo } from ".";

/**
 * A navigation bar component that contains a logo, a back button (conditional on authentication),
 * and a link to the 'Espace client'. It adapts based on the `isAuth` prop, showing or hiding the
 * back button accordingly.
 *
 * @param {{ isAuth?: boolean }} props - The props for the `Navbar` component.
 * @param {boolean} [props.isAuth] - Determines whether the back button is visible. Default is `false`.
 * @returns {JSX.Element} - The rendered `Navbar` component.
 */
export const Navbar: FC<{ isAuth?: boolean }> = ({ isAuth }) => {
  return (
    <nav className="flex justify-between items-center py-5 bg-transparent">
      <div className="flex gap-5 md:gap-[50px] lg:gap-[95px] items-center">
        <Logo />
        <BackButton className={isAuth ? "block" : "hidden"} />
      </div>
      <div>
        <Link href="/">
          <button className="flex justify-center items-center gap-2.5 text-lg md:text-[22px] font-medium">
            <Image
              src="/boutton-arrow-icon.png"
              width={44}
              height={44}
              alt="Espace client"
              className="w-[30px] h-auto md:w-[44px]"
            />
            Espace client
          </button>
        </Link>
      </div>
    </nav>
  );
};
