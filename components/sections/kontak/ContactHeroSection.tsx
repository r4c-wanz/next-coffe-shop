import {
  ArrowRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserRoundIcon,
} from "lucide-react";
import ContactInput from "@/components/auth/ContactInput";
import IconInput from "@/components/auth/IconInput";

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

export default function ContactHeroSection() {
  return (
    <section
      id="hero"
      className="flex h-dvh items-center justify-center bg-[#FBF7F2] p-6"
    >
      <div className="flex max-w-323 flex-1 gap-14">
        <div className="flex-1">
          <h1 className="px-1 font-semibold">Hubungi Kami</h1>
          <h2 className="mt-4 font-mono text-4xl font-bold text-[#3A5A40]">
            Lebih Siap mendengar dari Anda!
          </h2>
          <div className="mt-3 px-1 font-semibold text-[#666666]">
            <p>Punya pertanyaan, saran, atau ingin bekerja sama?</p>
            <p>Kami siap membantu Anda.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-7 divide-y divide-[#DAD7CD]">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="flex items-center gap-4 py-6">
                  <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-white text-[#3A5A40] shadow-2xl shadow-[#F6EFE8]">
                    <Icon size={30} />
                  </div>
                  <div>
                    <h4 className="font-bold">{info.title}</h4>
                    <p className="mt-2 text-sm font-medium text-[#666666]">
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-2xl bg-white p-8 shadow-lg outline outline-[#DAD7CD]">
            <h3 className="font-mono text-[28px] font-semibold text-[#3A5A40]">
              Kirim Pesan
            </h3>
            <p className="mt-2 font-medium text-[#666666]">
              Isi form di bawah ini dan tim kami akan segera membalas.
            </p>
            <form className="mt-6">
              <IconInput
                label="Nama Lengkap"
                name="fullName"
                id="fullName"
                type="text"
                icon={UserRoundIcon}
                placeholder="Masukkan Nama Lengkap"
              />
              <div className="mt-4">
                <ContactInput />
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
        </div>
      </div>
    </section>
  );
}
