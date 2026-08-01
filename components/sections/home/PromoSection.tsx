import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function PromoSection() {
  return (
    <section id="promo" className="p-5">
      <div className="mx-auto max-w-323">
        <div className="relative overflow-hidden rounded-[20px] bg-[#F6EFE8] px-12.5 py-10">
          <div className="max-w-98">
            <h3 className="font-mono text-4xl font-semibold text-[#3A5A40]">
              Temani Harimu Dengan Kopi{" "}
              <span className="text-[#E68B24]">Terbaik</span>
            </h3>
            <p className="mt-2.5 font-medium">
              Dari biji kopi pilihan, diracik oleh barista terbaik untuk
              pengalaman ngopi yang tak terlupakan.
            </p>
            <Link
              href="/"
              className="mt-5 inline-flex items-center gap-3.5 rounded-[20px] bg-[#3A5A40] px-6.5 py-4 text-xl font-bold text-white"
            >
              Eksplor Menu <ArrowRightIcon />
            </Link>
          </div>
          <div className="absolute top-0 right-0 bottom-0 w-190 bg-linear-to-r from-[rgba(240,240,240,0)] from-0% to-[#F0F0F0] to-20%"></div>
        </div>
      </div>
    </section>
  );
}
