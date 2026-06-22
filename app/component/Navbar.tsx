"use client";

import Link from "next/link";
import { ShoppingCartIcon, UserRoundIcon } from "lucide-react";
import LogoWithText from "./LogoWithText";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-2 flex items-center justify-between bg-white px-11.5 py-9.5 text-xl font-medium text-[#344E41] shadow-xs">
      <Link href="/">
        <LogoWithText />
      </Link>
      <div className="flex items-center justify-between gap-16">
        <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
          Beranda
        </Link>
        <Link href="/menu" className={pathname === "/menu" ? "font-bold" : ""}>
          Menu
        </Link>
        <Link
          href="/tentang-kami"
          className={pathname === "/tentang-kami" ? "font-bold" : ""}
        >
          Tentang Kami
        </Link>
        <Link
          href="/kontak"
          className={pathname === "/kontak" ? "font-bold" : ""}
        >
          Kontak
        </Link>
      </div>
      <div className="flex items-center justify-between gap-7.5">
        <Link
          href="/login"
          className="flex items-center gap-2 rounded-[20px] px-6 py-4 outline-2 -outline-offset-2 outline-[#344E41]"
        >
          <UserRoundIcon size={30} /> Masuk
        </Link>
        <button className="relative h-13.5 w-13.5 cursor-pointer rounded-lg p-1">
          <ShoppingCartIcon size={40} className="absolute bottom-1 left-1" />
          <span className="absolute top-1 right-1 flex h-6.5 w-6.5 items-center justify-center rounded-full bg-[#E68B24] text-sm text-white">
            2
          </span>
        </button>
      </div>
    </nav>
  );
}
