import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-148 overflow-hidden bg-[#F6EFE8]">
      <div className="absolute right-0">
        <Image
          src="/hero-img.png"
          alt="Hero"
          width={1097}
          height={617}
          className="mask-[linear-gradient(to_right,#FFFFFF00_0%,#FFFFFF_24%)]"
        />
        <div className="absolute inset-0 bg-black/30 mask-[linear-gradient(to_right,#FFFFFF00_0%,#FFFFFF_24%)]" />
      </div>
      <div className="absolute -top-47 -left-12.5 h-180 w-180 rounded-br-[500px] bg-white blur-[100px]"></div>
      <div className="absolute top-13.5 left-18.5 z-1 max-w-121 text-xl">
        <h2 className="font-semibold text-[#3A5A40]">
          Single Origin • Aceh
        </h2>
        <h1 className="mt-4 font-mono text-[64px] font-bold text-[#3A5A40]">
          Kopi yang Bicara dari <span className="text-[#E68B24]">Hati</span>
        </h1>
        <p className="mt-6 max-w-[384px] font-medium">
          Setiap cangkir adalah cerita dari kebun pilihan Aceh, diseduh
          dengan dedikasi, untuk kamu nikmati.
        </p>
        <Link
          href="/menu"
          className="mt-6 inline-flex items-center gap-3.5 rounded-[20px] bg-[#3A5A40] px-6.5 py-4 font-bold text-white"
        >
          Pesan Sekarang <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
}
