import ContactInput from "@/app/component/Auth/ContactInput";
import IconInput from "@/app/component/Auth/IconInput";
import {
  ArrowRightIcon,
  AtSignIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserRoundIcon,
} from "lucide-react";

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
      <section id="hero" className="flex justify-center items-center h-dvh bg-[#FBF7F2] p-6">
        <div className="flex flex-1 max-w-323 gap-14">
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
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center gap-4 py-6">
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

      <section id="form-and-map" className="mt-5.5 p-5">
        <div className="mx-auto grid max-w-323 grid-cols-1 gap-14">
          <div className="relative flex flex-col gap-5">
            <div className="relative h-120 w-full overflow-hidden rounded-2xl p-4 outline outline-[#DAD7CD]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63536.638871432595!2d95.28750266208017!3d5.5611004712849335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040377ae63dbcdf%3A0x3039d80b220cb90!2sBanda%20Aceh%2C%20Kota%20Banda%20Aceh%2C%20Aceh!5e0!3m2!1sid!2sid!4v1785311182472!5m2!1sid!2sid"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full rounded-md"
              ></iframe>
            </div>
            <div className="absolute bottom-6 left-6 max-w-98 rounded-md bg-white p-6 outline outline-[#DAD7CD]">
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
    </div>
  );
}
