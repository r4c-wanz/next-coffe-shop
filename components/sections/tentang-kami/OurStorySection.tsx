import Image from "next/image";

export default function OurStorySection() {
  return (
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
  );
}
