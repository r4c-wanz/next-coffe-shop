"use client";

import Link from "next/link";
import { ShoppingCartIcon, UserRoundIcon } from "lucide-react";
import LogoWithText from "../ui/LogoWithText";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-2 bg-white px-8 py-6.5 shadow-xs">
      <div className="mx-auto flex max-w-323 items-center justify-between font-medium text-[#344E41]">
        <Link href="/">
          <LogoWithText className="h-7 w-20" />
        </Link>
        <div className="flex items-center justify-between gap-16">
          <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
            Beranda
          </Link>
          <Link
            href="/menu"
            className={pathname === "/menu" ? "font-bold" : ""}
          >
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
        <div className="flex justify-between gap-7.5">
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-[20px] px-6 py-4 outline-2 -outline-offset-2 outline-[#344E41]"
          >
            <UserRoundIcon /> Masuk
          </Link>
          <button className="relative h-11 w-11 cursor-pointer rounded-lg p-1">
            <ShoppingCartIcon size={26} className="absolute bottom-1 left-1" />
            <span className="absolute top-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#E68B24] text-xs text-white">
              2
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
