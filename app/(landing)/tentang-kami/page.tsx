import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CoffeeIcon, UsersIcon, LeafIcon } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: CoffeeIcon,
      title: "Kualitas Premium",
      description:
        "Kami hanya menggunakan biji kopi pilihan dari Aceh dengan standar kualitas internasional.",
    },
    {
      icon: UsersIcon,
      title: "Komunitas Pertama",
      description:
        "Membangun komunitas pecinta kopi yang saling mendukung dan berbagi passion.",
    },
    {
      icon: LeafIcon,
      title: "Keberlanjutan",
      description:
        "Komitmen terhadap lingkungan dengan praktik bisnis yang ramah ekosistem.",
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "Awal Perjalanan",
      description: "Cituisi Coffee didirikan dengan visi menyediakan kopi terbaik.",
    },
    {
      year: "2021",
      title: "Ekspansi Pertama",
      description: "Membuka outlet kedua dan memulai layanan delivery online.",
    },
    {
      year: "2022",
      title: "Inovasi Menu",
      description:
        "Meluncurkan signature drinks dan menghadirkan variasi menu yang lebih beragam.",
    },
    {
      year: "2023",
      title: "Pengakuan",
      description:
        "Memenangkan penghargaan Best Coffee Shop dan kepercayaan ribuan pelanggan setia.",
    },
  ];

  const teamMembers = [
    {
      initials: "AB",
      name: "Ahmad Budiman",
      position: "Founder & CEO",
      color: "bg-[#3A5A40]",
    },
    {
      initials: "RS",
      name: "Rini Setyawan",
      position: "Head Barista",
      color: "bg-[#3B2010]",
    },
    {
      initials: "MH",
      name: "Muhammad Hasan",
      position: "Operations Manager",
      color: "bg-[#3A5A40]",
    },
    {
      initials: "NW",
      name: "Ninda Wijaya",
      position: "Customer Experience",
      color: "bg-[#3B2010]",
    },
  ];

  return (
    <div className="pb-7.5">
      {/* Hero Section */}
      <section className="relative bg-[#F6EFE8] px-5 py-16">
        <div className="mx-auto max-w-323">
          <div className="text-center">
            <h1 className="font-mono text-[48px] font-semibold text-[#3A5A40]">
              Tentang <span className="text-[#E68B24]">Cituisi Coffee</span>
            </h1>
            <p className="mt-4 max-w-96 mx-auto text-lg font-medium text-[#666666]">
              Lebih dari sekadar kopi, kami adalah cerita, passion, dan dedikasi
              dalam setiap tegukan.
            </p>
          </div>
          <div className="mt-12 relative h-80 rounded-[20px] bg-[#DAD7CD] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3A5A40]/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <CoffeeIcon size={120} className="text-[#3A5A40] opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="p-5">
        <div className="mx-auto max-w-323">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-mono text-[40px] font-semibold text-[#3A5A40]">
                Kisah Kami Dimulai
              </h2>
              <p className="mt-4 text-[#666666] font-medium leading-relaxed">
                Cituisi Coffee lahir dari kecintaan terhadap kopi berkualitas dan
                mimpi untuk membangun ruang bagi komunitas pecinta kopi. Setiap
                biji kopi dipilih dengan cermat dari kebun pilihan di Aceh,
                diolah dengan standar internasional, dan diseduh oleh barista
                berpengalaman.
              </p>
              <p className="mt-4 text-[#666666] font-medium leading-relaxed">
                Kami percaya bahwa kopi bukan hanya minuman, tetapi pengalaman
                yang menciptakan momen berharga bersama orang-orang terkasih.
              </p>
              <Link
                href="/menu"
                className="mt-6 inline-flex items-center gap-3.5 rounded-[20px] bg-[#3A5A40] px-6.5 py-4 font-bold text-white"
              >
                Jelajahi Menu <ArrowRightIcon />
              </Link>
            </div>
            <div className="relative h-96 rounded-[20px] bg-gradient-to-br from-[#3A5A40] to-[#3B2010] overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="p-5">
        <div className="mx-auto max-w-323">
          <div className="text-center mb-12">
            <h2 className="font-semibold text-[#666666]">Nilai Kami</h2>
            <h3 className="mt-3 font-mono text-[32px] font-semibold text-[#3A5A40]">
              Fondasi Bisnis Kami
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-7">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white p-8 outline outline-[#DAD7CD] transition-all hover:shadow-lg"
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#F6EFE8]">
                    <Icon size={32} className="text-[#3A5A40]" />
                  </div>
                  <h4 className="mt-6 font-bold text-lg text-[#3A5A40]">
                    {value.title}
                  </h4>
                  <p className="mt-3 text-[#666666] font-medium leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="p-5">
        <div className="mx-auto max-w-323">
          <div className="text-center mb-12">
            <h2 className="font-semibold text-[#666666]">Perjalanan Kami</h2>
            <h3 className="mt-3 font-mono text-[32px] font-semibold text-[#3A5A40]">
              Milestone Penting
            </h3>
          </div>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#3A5A40] text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-1 h-24 bg-[#DAD7CD] mt-2" />
                  )}
                </div>
                <div className="pt-2 pb-6">
                  <h4 className="font-bold text-lg text-[#3A5A40]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[#666666] font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="p-5">
        <div className="mx-auto max-w-323">
          <div className="text-center mb-12">
            <h2 className="font-semibold text-[#666666]">Tim Kami</h2>
            <h3 className="mt-3 font-mono text-[32px] font-semibold text-[#3A5A40]">
              Orang-orang di Balik Kopi
            </h3>
          </div>
          <div className="grid grid-cols-4 gap-7">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center rounded-3xl p-8 outline outline-[#DAD7CD]"
              >
                <div
                  className={`flex items-center justify-center h-24 w-24 rounded-full ${member.color} text-white text-3xl font-bold mx-auto`}
                >
                  {member.initials}
                </div>
                <h4 className="mt-4 font-bold text-[#3A5A40]">{member.name}</h4>
                <p className="mt-2 text-sm font-medium text-[#666666]">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-5">
        <div className="mx-auto max-w-323">
          <div className="relative overflow-hidden rounded-[20px] bg-[#3A5A40] px-12.5 py-7 text-white">
            <div className="">
              <h3 className="font-mono text-[32px] font-semibold">
                Jadilah Bagian dari{" "}
                <span className="text-[#E68B24]">Komunitas Kami</span>
              </h3>
              <p className="mt-2.5 max-w-75.5 font-medium text-[#E5E5E5]">
                Kunjungi outlet kami atau pesan online untuk merasakan pengalaman
                kopi terbaik.
              </p>
              <div className="mt-6 flex gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 rounded-[20px] bg-[#E68B24] px-6.5 py-4 font-bold text-[#3A5A40]"
                >
                  Pesan Sekarang <ArrowRightIcon />
                </Link>
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 rounded-[20px] border-2 border-white px-6.5 py-4 font-bold text-white"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 w-170 bg-linear-to-r from-[rgba(97,123,102,0)] from-0% to-[#617B66] to-20%"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
