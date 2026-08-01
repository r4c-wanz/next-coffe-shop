import Image from "next/image";

export default function TeamSection() {
  return (
    <section id="team" className="mt-5.5 p-5">
      <div className="mx-auto flex max-w-323 gap-15">
        <div className="grid max-w-160 flex-1 grid-cols-2 gap-7">
          <div className="row-span-2 overflow-hidden rounded-2xl outline outline-[#DAD7CD]">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/hero-img-depan-toko.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl outline outline-[#DAD7CD]">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/hero-img-depan-toko.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl outline outline-[#DAD7CD]">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/hero-img-depan-toko.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-w-91.5">
          <h2 className="px-1 font-semibold text-[#666666]">
            Lebih dari sekedar kopi
          </h2>
          <h3 className="mt-3 px-1 font-mono text-[32px] font-semibold text-[#3A5A40]">
            Tempat di mana kopi cerita dimulai
          </h3>
          <div className="mt-5 px-1 font-medium">
            <p>
              Kami percaya, kopi bukan hanya tentang rasa. Tapi tentang momen,
              percakapan, inpirasi, dan koneksi.
            </p>
            <p className="mt-1">
              Di Cituisi Coffee, setiap detail kami hadirkan untuk memberikan
              pengalaman terbaik bagi setiap pecinta kopi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
