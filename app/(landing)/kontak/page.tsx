import {
  ArrowRightIcon,
  AtSignIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function KontakPage() {
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Alamat",
      description: "Jl. Kopi Aceh No. 17, Banda Aceh",
    },
    {
      icon: PhoneIcon,
      title: "Telepon / WhatsApp",
      description: "+62 812-3456-7890",
    },
    {
      icon: MailIcon,
      title: "Email",
      description: "halo@cituisicoffee.com",
    },
    {
      icon: ClockIcon,
      title: "Jam Operasional",
      description: "Setiap Hari, 08.00 - 22.00",
    },
  ];

  return (
    <div className="pb-7.5">
      <section id="header" className="p-5">
        <div className="mx-auto max-w-323">
          <h1 className="px-1 font-mono text-[32px] font-semibold text-[#3A5A40]">
            Hubungi Kami
          </h1>
          <h2 className="mt-3 px-1 font-semibold text-[#666666]">
            Ada pertanyaan, saran, atau ingin bekerja sama? Kami siap membantu.
          </h2>
        </div>
      </section>

      <section id="contact-info" className="mt-5.5 p-5">
        <div className="mx-auto max-w-323">
          <div className="grid grid-cols-4 gap-7">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="rounded-4xl p-6 outline outline-[#DAD7CD]"
                >
                  <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-[#F6EFE8] text-[#3A5A40]">
                    <Icon size={30} />
                  </div>
                  <h4 className="mt-5 font-bold">{info.title}</h4>
                  <p className="mt-2 text-sm font-medium text-[#666666]">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="form-and-map" className="mt-5.5 p-5">
        <div className="mx-auto grid max-w-323 grid-cols-2 gap-14">
          <div className="rounded-4xl p-8 outline outline-[#DAD7CD]">
            <h3 className="font-mono text-[28px] font-semibold text-[#3A5A40]">
              Kirim Pesan
            </h3>
            <p className="mt-2 font-medium text-[#666666]">
              Isi form di bawah ini dan tim kami akan segera membalas.
            </p>
            <form className="mt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-[#344E41]">
                    Nama <span className="text-[#E68B24]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan Nama"
                    className="mt-2 w-full rounded-[10px] p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#344E41]">
                    Email <span className="text-[#E68B24]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Masukkan Email"
                    className="mt-2 w-full rounded-[10px] p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm font-semibold text-[#344E41]">
                  Subjek <span className="text-[#E68B24]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Tentang apa pesan ini?"
                  className="mt-2 w-full rounded-[10px] p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
                />
              </div>
              <div className="mt-4">
                <label className="text-sm font-semibold text-[#344E41]">
                  Pesan <span className="text-[#E68B24]">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Tulis pesanmu di sini"
                  className="mt-2 w-full resize-none rounded-[10px] p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-3.5 rounded-[20px] bg-[#3A5A40] py-4 text-sm font-bold text-white"
              >
                Kirim Pesan <ArrowRightIcon size={18} />
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative h-70 w-full overflow-hidden rounded-4xl">
              <Image
                src="/Cafe.png"
                alt="Gerai Cituisi Coffee"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-4xl p-6 outline outline-[#DAD7CD]">
              <h4 className="font-bold">Kunjungi Gerai Kami</h4>
              <p className="mt-2 text-sm font-medium text-[#666666]">
                Datang langsung dan rasakan suasana hangat Cituisi Coffee sambil
                menikmati kopi favoritmu.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F6EFE8] text-[#3A5A40]">
                  <AtSignIcon size={20} />
                </div>
                <span className="text-sm font-semibold text-[#344E41]">
                  @cituisicoffee
                </span>
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
                Masih Ada yang Ingin Ditanyakan?
              </h3>
              <p className="mt-2.5 max-w-75.5 font-medium text-[#E5E5E5]">
                Tim kami siap membantu menjawab pertanyaanmu kapan saja.
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
    </div>
  );
}
