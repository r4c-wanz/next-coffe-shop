import { AtSignIcon } from "lucide-react";

export default function ContactMapSection() {
  return (
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
  );
}
