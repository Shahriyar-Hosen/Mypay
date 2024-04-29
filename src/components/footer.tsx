import { footerItems, footerSocial } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./common";

export const Footer = () => {
  return (
    <footer className="pt-10 py-5">
      <div className="flex justify-between items-start gap-2.5">
        <div className="space-y-10">
          <Logo />

          <p className="text-lg text-white/70 max-w-[312px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {footerItems.map(({ title, items }, i) => (
          <div key={i} className="space-y-5">
            <h3 className="text-lg font-medium">{title}</h3>

            <div className="flex flex-col justify-center items-start gap-2.5">
              {items.map(({ label, link }, i) => (
                <Link key={i} href={link}>
                  <p className="text-white/70 hover:text-white/80 text-base">
                    {label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="py-5 mt-10 border-t border-slate-600/40 flex justify-between items-center gap-5 flex-wrap">
        <p className="text-white/60 text-lg">
          Copyright &copy; {new Date().getFullYear()} EvoFin. All Rights
          Reserved.
        </p>
        <div className="flex justify-center items-center gap-5">
          {footerSocial.map(({ img, label, link }, i) => (
            <Link key={i} href={link} target="_blank">
              <Image src={img} alt={label} width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
