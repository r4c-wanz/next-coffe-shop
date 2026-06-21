import Link from "next/link";
import { ShoppingCartIcon, UserRoundIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-11.5 py-6 text-xl font-semibold text-[#344E41]">
      <Link href="/" className="font-bold">
        CITUSI COFFEE
      </Link>

      <div className="flex items-center gap-16">
        <Link href="/" className="font-bold">
          Beranda
        </Link>
        <Link href="/">Menu</Link>
        <Link href="/tentang-kami">Tentang Kami</Link>
        <Link href="/">Kontak</Link>
      </div>

      <div className="flex items-center gap-7.5">
        <Link
          href="/login"
          className="flex items-center gap-2 rounded-[20px] outline-2 outline-[#344E41] -outline-offset-2 px-6 py-4"
        >
          <UserRoundIcon size={30} />
          Masuk
        </Link>

        <button className="relative w-13.5 h-13.5">
          <ShoppingCartIcon size={40} className="absolute left-1 bottom-1" />
          <div className="absolute top-1 right-1 h-6.5 w-6.5 rounded-full bg-[#E68B24] text-white flex items-center justify-center text-xs">
            2
          </div>
        </button>
      </div>
    </nav>
  );
}
