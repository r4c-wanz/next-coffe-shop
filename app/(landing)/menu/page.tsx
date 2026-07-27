import Categories from "@/app/component/Categories";
import { PlusIcon, SearchIcon, SlidersHorizontalIcon } from "lucide-react";

export default function MenuPage() {
  const menuItems = [
    {
      name: "Es Tiramisu Latte",
      component: "Kopi + Susu + Tiramisu",
      price: 30000,
    },
    {
      name: "Es  Americano",
      component: "Kopi + Air + Es",
      price: 30000,
    },
    {
      name: "Es Cappucino Latte",
      component: "Kopi + Susu + Cincau",
      price: 30000,
    },
    {
      name: "Es Caramel Latte",
      component: "Kopi + Susu + Caramel",
      price: 30000,
    },
    {
      name: "Es Rose & Rosella",
      component: "Teh + Rose & Rosella",
      price: 30000,
    },
    {
      name: "Es Signature Coklat",
      component: "Coklat + Susu ",
      price: 30000,
    },
    {
      name: "Es Almond Latte",
      component: "Kopi + Susu + Almond",
      price: 30000,
    },
    {
      name: "Es Erly Grey",
      component: "Teh + Erly Grey",
      price: 30000,
    },
    {
      name: "Es Creamy Matchachio",
      component: "Susu + Pistachio + Cream",
      price: 30000,
    },
    {
      name: "Es Matcha Signatur",
      component: "Susu + Bubuk Macth",
      price: 30000,
    },
  ];

  return (
    <div className="pb-7.5">
      <section id="menu" className="p-5">
        <div className="mx-auto max-w-323">
          <h1 className="px-1 font-mono text-[32px] font-semibold text-[#3A5A40]">
            Menu Kami
          </h1>
          <h2 className="mt-3 px-1 font-semibold text-[#666666]">
            Temukan berbagai pilihan minuman kopi terbaik kami.
          </h2>
          <div className="mt-8">
            <label className="relative">
              <SearchIcon
                size={20}
                className="absolute top-1/2 -translate-y-1/2 left-3.5 text-[#666666]"
              />
              <input
                type="text"
                placeholder="Cari menu favoritmu..."
                className="w-full rounded-xl p-3.5 pl-10.5 outline outline-[#DAD7CD] placeholder:text-[#A3A3A3]"
              />
            </label>
            <div className="mt-8 flex items-center justify-between text-[#3A5A40]">
              <Categories />
              <button className="flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-white px-5 text-sm font-semibold outline outline-[#DAD7CD]">
                <SlidersHorizontalIcon size={20} />
                Filter
              </button>
            </div>
          </div>
          <div className="mt-9 grid grid-cols-5 gap-7 text-sm font-semibold">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="min-w-59 rounded-4xl p-5.5 outline outline-[#DAD7CD]"
              >
                <div
                  id="placeholder"
                  className="h-30.5 rounded-[14px] bg-[#F0F0F0]"
                />
                <h4 className="mt-5 font-bold">{item.name}</h4>
                <p className="mt-2 text-[#666666]">{item.component}</p>
                <div className="mt-6.5 flex items-center justify-between gap-3">
                  <p className="flex gap-1.5">
                    Rp <span>{item.price}</span>
                  </p>
                  <button className="flex h-7.5 w-7.5 cursor-pointer items-center justify-center rounded-full bg-[#3A5A40] text-white">
                    <PlusIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="why-us" className="p-5">
        <div className="mx-auto max-w-323">
          <div className="relative overflow-hidden rounded-[20px] bg-[#3A5A40] px-12.5 py-7 text-white">
            <div className="">
              <h2 className="mt-2.5 text-[32px] font-semibold">
                Nikmati Kopi Favoritmu
              </h2>
              <p className="mt-2.5 max-w-75.5 font-medium text-[#E5E5E5]">
                Pilih minuman favorit dan tambahkan ke keranjang pesananmu.
              </p>
            </div>
            <div className="absolute top-0 right-0 bottom-0 w-170 bg-linear-to-r from-[rgba(97,123,102,0)] from-0% to-[#617B66] to-20%"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
