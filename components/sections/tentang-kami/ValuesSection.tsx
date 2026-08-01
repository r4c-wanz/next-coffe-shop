import { AwardIcon, HeartIcon, LeafIcon, UsersIcon } from "lucide-react";

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

export default function ValuesSection() {
  return (
    <section id="values" className="mt-5.5 p-5">
      <div className="mx-auto max-w-323">
        <h2 className="px-1 font-semibold text-[#666666]">Nilai Kami</h2>
        <h3 className="mt-3 px-1 font-mono text-[32px] font-semibold text-[#3A5A40]">
          Yang Kami Pegang Teguh
        </h3>
        <div className="mt-9 grid grid-cols-4 gap-7">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
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
  );
}
