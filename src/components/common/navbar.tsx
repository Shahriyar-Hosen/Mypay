import Image from "next/image";
import Link from "next/link";
import { Logo } from ".";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 bg-transparent">
      <Logo />
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
