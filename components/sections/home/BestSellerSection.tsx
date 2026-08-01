import Image from "next/image";
import { StarIcon } from "lucide-react";
import { menuItems } from "@/data/menu";

export default function BestSellerSection() {
  const bestSellerItems = menuItems.filter((item) => item.bestSeller);

  return (
    <section id="best-seller" className="flex h-[80dvh] items-center p-5">
      <div className="mx-auto max-w-323 flex-1">
        <h2 className="px-1 font-semibold text-[#666666]">Best Seller</h2>
        <h3 className="mt-3 px-1 font-mono text-[32px] font-semibold text-[#3A5A40]">
          Paling banyak dipesan
        </h3>
        <div className="mt-9 grid grid-cols-3 gap-7 text-sm font-bold">
          {bestSellerItems.map((item) => (
            <div
              key={item.id}
              className="flex w-full min-w-59 items-center gap-6.5 rounded-4xl p-5.5 outline outline-[#DAD7CD]"
            >
              <div
                id="placeholder"
                className="relative h-full w-35 shrink-0 overflow-hidden rounded-[14px] bg-[#F0F0F0]"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full">
                <h4 className="">{item.name}</h4>
                <p className="mt-2 text-[#666666]">{item.component}</p>
                <div className="mt-6.5 flex items-center justify-between gap-3">
                  <p className="flex items-center gap-1.5">
                    Rp <span>{item.price.toLocaleString("id-ID")}</span>
                  </p>
                  <div className="flex items-center gap-1">
                    <StarIcon className="fill-[#E68B24] text-transparent" />
                    {`${item.rating}.5`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
