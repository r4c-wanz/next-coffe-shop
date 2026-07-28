import {
  ArrowRightIcon,
  AwardIcon,
  HeartIcon,
  LeafIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: LeafIcon,
      title: "Biji Kopi Pilihan",
      description: "Single origin terbaik dari kebun kopi Aceh",
    },
    {
      icon: HeartIcon,
      title: "Diracik dengan Hati",
      description: "Setiap cangkir diseduh dengan penuh dedikasi",
    },
    {
      icon: UsersIcon,
      title: "Komunitas Hangat",
      description: "Tempat berkumpul yang nyaman untuk semua",
    },
    {
      icon: AwardIcon,
      title: "Kualitas Terjamin",
      description: "Konsisten menjaga standar rasa di setiap gerai",
    },
  ];

  return (
    <div className="pb-7.5">
      <section
        id="hero"
        className="relative h-[calc(100dvh-138px)] overflow-hidden bg-[#F6EFE8]"
      >
        <div className="absolute right-0">
          <Image
            src="/hero-img-depan-toko.png"
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
            Cerita Kami • Sejak 2020
          </h2>
          <h1 className="mt-4 font-mono text-[64px] font-bold text-[#3A5A40]">
            Menyeduh Kehangatan di Setiap{" "}
            <span className="text-[#E68B24]">Cerita</span>
          </h1>
          <p className="mt-6 max-w-[384px] font-medium">
            Cituisi Coffee lahir dari kecintaan pada biji kopi Aceh dan mimpi
            menghadirkan secangkir kopi yang bercerita, bukan sekadar minuman.
          </p>
          <Link
            href="/menu"
            className="mt-6 inline-flex items-center gap-3.5 rounded-[20px] bg-[#3A5A40] px-6.5 py-4 font-bold text-white"
          >
            Lihat Menu Kami <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section id="story" className="mt-5.5 p-5">
        <div className="mx-auto grid max-w-323 grid-cols-2 items-center gap-14">
          <div className="overflow-hidden rounded-4xl">
            <Image
              src="/Foto Tentang Kami.png"
              alt="Cituisi Coffee"
              width={1539}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold text-[#666666]">Cerita Kami</h2>
            <h3 className="mt-3 font-mono text-[32px] font-semibold text-[#3A5A40]">
              Dari Kebun Aceh ke Cangkirmu
            </h3>
            <p className="mt-4 font-medium text-[#666666]">
              Berawal dari kecintaan pada kopi tanah kelahiran, Cituisi Coffee
              didirikan untuk membagikan cita rasa biji kopi Aceh yang selama
              ini jarang dikenal luas.
            </p>
            <p className="mt-4 font-medium text-[#666666]">
              Kami percaya kopi yang enak lahir dari proses yang jujur: petani
              yang dihargai, biji yang dipilih dengan teliti, dan barista yang
              menyeduh dengan sepenuh hati untuk setiap pelanggan yang datang.
            </p>
          </div>
        </div>
      </section>

      <section id="values" className="mt-5.5 p-5">
        <div className="mx-auto max-w-323">
          <h2 className="px-1 font-semibold text-[#666666]">Nilai Kami</h2>
          <h3 className="mt-3 px-1 font-mono text-[32px] font-semibold text-[#3A5A40]">
            Yang Kami Pegang Teguh
          </h3>
          <div className="mt-9 grid grid-cols-4 gap-7">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="rounded-4xl p-6 outline outline-[#DAD7CD]"
                >
                  <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-[#F6EFE8] text-[#3A5A40]">
                    <Icon size={30} />
                  </div>
                  <h4 className="mt-5 font-bold">{value.title}</h4>
                  <p className="mt-2 text-sm font-medium text-[#666666]">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
    </div>
  );
}
