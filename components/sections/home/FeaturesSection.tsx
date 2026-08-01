import { CoffeeIcon, GiftIcon, ShieldCheckIcon, TruckIcon } from "lucide-react";

const features = [
  {
    icon: CoffeeIcon,
    title: "Diseduh Segar Setiap Hari",
    description: "Kualitas tebaik setiap saat",
  },
  {
    icon: TruckIcon,
    title: "Gratis Ongkir Min. 30K",
    description: "Lebih hemat, lebih nyaman",
  },
  {
    icon: GiftIcon,
    title: "Poin Reward Setiap Pembelian",
    description: "Kumpulkan poin, dapatkan benefit",
  },
  {
    icon: ShieldCheckIcon,
    title: "Pembayaran Aman & Terpecaya",
    description: "Transaksi aman, tenang berbelanja",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative z-1 -mt-16.5 p-5">
      <div className="mx-auto grid max-w-323 grid-cols-4 items-center justify-between gap-17.5 rounded-3xl bg-white px-12 py-10 outline -outline-offset-1 outline-[#DAD7CD]">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="flex items-center gap-7">
              <Icon size={60} className="text-[#3A5A40]" />
              <div className="max-w-39.5">
                <h3 className="font-semibold text-[#000000]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-[#666666]">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
