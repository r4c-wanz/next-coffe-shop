import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="cta" className="mt-5.5 p-5">
      <div className="mx-auto max-w-323">
        <div className="relative overflow-hidden rounded-[20px] bg-[#3A5A40] px-12.5 py-10 text-white">
          <div className="max-w-98">
            <h2 className="text-[#E5E5E5]">Kenapa pilih Cituisi Coffe?</h2>
            <h3 className="mt-2.5 font-mono text-[32px] font-semibold">
              Ingin Merasakan Kehangatan Kami?
            </h3>
            <p className="mt-2.5 max-w-75.5 font-medium text-[#E5E5E5]">
              Kunjungi gerai kami atau jelajahi menu favoritmu hari ini.
            </p>
            <Link
              href="/menu"
              className="mt-5 inline-flex items-center gap-3.5 rounded-[20px] bg-white px-6.5 py-4 text-xl font-bold text-[#3A5A40]"
            >
              Eksplor Menu <ArrowRightIcon />
            </Link>
          </div>
          <div className="absolute top-0 right-0 bottom-0 w-170 bg-linear-to-r from-[rgba(97,123,102,0)] from-0% to-[#617B66] to-20%"></div>
        </div>
      </div>
    </section>
  );
}
