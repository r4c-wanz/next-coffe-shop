import Image from "next/image";

export default function ProcessSection() {
  return (
    <section id="process" className="mt-5.5 p-5">
      <div className="mx-auto max-w-323">
        <div className="grid grid-cols-2 items-center gap-14">
          <div>
            <h2 className="font-semibold text-[#666666]">Proses Kami</h2>
            <h3 className="mt-3 font-mono text-[32px] font-semibold text-[#3A5A40]">
              Dari Biji Hingga Secangkir
            </h3>
            <p className="mt-4 font-medium text-[#666666]">
              Biji kopi pilihan kami sangrai dengan takaran yang tepat untuk
              menjaga karakter rasa aslinya, lalu diseduh langsung di gerai
              agar sampai ke tanganmu selalu dalam kondisi terbaik.
            </p>
            <p className="mt-4 font-medium text-[#666666]">
              Suasana gerai kami dirancang hangat dan nyaman, cocok untuk
              bekerja, berkumpul, atau sekadar menikmati waktu sendiri
              ditemani secangkir kopi.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="overflow-hidden rounded-4xl">
              <Image
                src="/Biji-kopi.png"
                alt="Biji Kopi"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-4xl">
              <Image
                src="/Cafe.png"
                alt="Suasana Cafe"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
